import { formatDate } from "@src/lib/formatDate";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { addDays, differenceInDays } from "date-fns";
import { useContext, useState, useTransition } from "react";
import { DateRange } from "react-day-picker";
import { PostContext } from "@src/pages/post";
import { Rating } from "../Rating";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import success from "@src/assets/icons/success.svg";
import cross from "@src/assets/icons/cross.svg";
import { Cross2Icon } from "@radix-ui/react-icons";
import useUserStore from "@src/store/userStore";
import axios from "axios";
export const Reserve = () => {
  const [ispending, startTrasition] = useTransition();
  const post = useContext(PostContext);
  const { user } = useUserStore();

  // Function to calculate rental duration
  const calculateRentTime = () => {
    if (date?.from && date?.to) {
      return differenceInDays(date.to, date.from) + 1;
    }
    return 0;
  };

  // Function to calculate rental price based on duration
  const calculatePrice = () => {
    const rentTime = calculateRentTime();
    if (rentTime < 7) {
      return post.price.day * rentTime;
    } else if (rentTime < 31) {
      return post.price.week * rentTime;
    } else {
      return post.price.month * rentTime;
    }
  };
  const choisingPrice = () => {
    if (calculateRentTime() < 7) {
      return post.price.day;
    } else if (calculateRentTime() < 31) {
      return post.price.week;
    } else {
      return post.price.month;
    }
  };
  // Function to calculate service fee
  const calculateServiceFee = () => {
    return calculatePrice() * 0.05;
  };

  // Function to calculate discount for monthly rentals
  const calculateDiscount = () => {
    const rentTime = calculateRentTime();
    if (rentTime >= 7 && rentTime < 31) {
      return post.price.day * rentTime - post.price.week * rentTime;
    } else if (rentTime >= 31) {
      return post.price.day * rentTime - post.price.month * rentTime;
    }
    return 0;
  };

  // Function to calculate total price
  const calculateTotalPrice = () => {
    const price = calculatePrice();
    const serviceFee = calculateServiceFee();
    return price + serviceFee;
  };

  // State for rental duration and selected dates
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), post.minTime - 1),
  });
  const checkDate = () => {
    if (date?.from && date?.to) {
      setStep((prev) => prev + 1);
    }
  };
  // State for step in the reservation process
  const [step, setStep] = useState(0);

  // Calculate rental duration
  const rentTime = calculateRentTime();
  const dayPrice = choisingPrice();
  const price = calculatePrice();
  const serviceFee = calculateServiceFee();
  const discount = calculateDiscount();
  const totalPrice = calculateTotalPrice();

  const [renterMessage, setRenterMessage] = useState("");
  const sendReservation = async () => {
    const url = import.meta.env.VITE_API_URL + "/post/" + post._id;
    startTrasition(() => {
      axios
        .post(url, {
          date_deb: date?.from,
          date_fin: date?.to,
          evaluation: 0,
          id_renter: user?._id,
          total: totalPrice,
        })
        .then((res) => {
          console.log(res.data);
          console.log("Reservation sent");
          setStep(2);
        })
        .catch((err) => {
          console.log(err);
          setStep(3);
        })
        .finally(() => {
          setDate({
            from: new Date(),
            to: addDays(new Date(), post.minTime - 1),
          });
          setRenterMessage("");
        });
    });
  };

  return step === 0 ? (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="my-8 text-2xl font-medium">
          Vérifier le prix et la disponibilité
        </DialogTitle>
        <DialogDescription className="shadow-custom flex flex-col space-y-8 p-8">
          <Calendar
            classNames={{
              nav_button:
                "bg-primary text-white hover:text-primary hover:bg-transparent hover:border hover:border-primary rounded",
              month: "bg-white p-2 space-y-4 shadow-md",
              root: "w-full flex items-start justify-center h-96",
            }}
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
            min={post.minTime}
            className="p-4"
            disabled={post.rented}
          />
          <p className="text-center text-red-400">
            Location minimum de {post.minTime} jours
          </p>
        </DialogDescription>
      </DialogHeader>
      <DialogFooter className="flex justify-between gap-4 bg-white p-6">
        <div className="flex flex-col justify-between">
          <p>
            <span className="text-sm text-stone-500">Durée:</span> {rentTime}{" "}
            journées
          </p>
          {rentTime != 0 ? (
            <p>
              <span className="text-sm text-stone-500">Date:</span> Du{" "}
              {formatDate(date?.from)} jusqu'à {formatDate(date?.to)}
            </p>
          ) : null}
        </div>
        <div className="flex items-center gap-4">
          <DialogClose>
            <Button
              className="w-full border-2 border-primary bg-white py-5 text-lg font-medium text-primary hover:bg-primary hover:text-white hover:brightness-90"
              onClick={() => setStep(0)}
            >
              Annuler
            </Button>
          </DialogClose>

          <Button
            className="w-full border-2 border-primary bg-primary py-5 text-lg font-medium text-white hover:bg-primary hover:brightness-90"
            onClick={() => checkDate()}
          >
            Continue
          </Button>
        </div>
      </DialogFooter>
    </DialogContent>
  ) : step == 1 ? (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="my-6 text-2xl font-medium">
          Check availability
        </DialogTitle>
        <DialogDescription className="shadow-custom mx-auto flex w-full flex-col justify-center space-y-4  py-6">
          <div className="mx-auto flex w-fit flex-col justify-center space-y-4 ">
            <p className="text-4xl font-bold text-stone-950">{post.title}</p>
            <Rating rating={post.rating} titled />
            <div className="flex w-full flex-col justify-center border-2 border-stone-300 bg-white p-2">
              <div className="flex justify-between py-4">
                <p>
                  <span className="text-sm text-stone-500">Durée:</span>{" "}
                  {rentTime} journées
                </p>
                <p className="text-lg text-black">
                  {formatDate(date?.from)} - {formatDate(date?.to)}
                </p>
              </div>
              <div className="my-4 flex h-px bg-stone-300" />

              <div className="flex justify-between py-2">
                <p className="text-lg text-black">
                  {dayPrice} DT X {rentTime} Journées
                </p>
                <p className="text-lg text-black">{price} DT</p>
              </div>
              <div className="flex justify-between py-2">
                <p className="text-lg text-black">Frais de service (5%)</p>
                <p className="text-lg text-black">{serviceFee} DT</p>
              </div>
              <div className="flex justify-between py-2">
                <p className="text-lg text-primary">Remise sur prix mensuel</p>
                <p className="text-lg text-primary">{discount} DT</p>
              </div>
              <div className="my-4 flex h-px bg-stone-300" />
              <div className="flex justify-between py-4">
                <p className="text-lg text-black">Total</p>
                <p className="text-lg text-black">{totalPrice} DT</p>
              </div>
            </div>
            <Label className="text-xl font-medium text-stone-500">
              Envoyer un message au propriétaire (obligatoire) :
            </Label>
            <Textarea
              className="h-20 max-h-20 min-h-20 w-full bg-white"
              placeholder="Envoyez tout autre détail concernant votre demande .."
              value={renterMessage}
              onChange={(e) => setRenterMessage(e.target.value)}
              disabled={ispending}
            />
          </div>
        </DialogDescription>
      </DialogHeader>
      <DialogFooter className="flex justify-between gap-4 bg-whiteR p-6">
        <div className="flex flex-col justify-between bg-whiteR">
          <p>
            <span className="text-sm text-stone-500">Durée:</span> {rentTime}{" "}
            journées
          </p>
          {date?.from != undefined && date?.to != undefined ? (
            <p>
              <span className="text-sm text-stone-500">Date:</span> Du{" "}
              {formatDate(date?.from)} jusqu'à {formatDate(date?.to)}
            </p>
          ) : null}
        </div>
        <div className="flex items-center gap-4">
          <Button
            className="w-full border-2 border-primary bg-white py-5 text-lg font-medium text-primary hover:bg-primary hover:text-white hover:brightness-90"
            onClick={() => setStep((prev) => prev - 1)}
          >
            Annuler
          </Button>

          <Button
            className="w-full border-2 border-primary bg-primary py-5 text-lg font-medium text-white hover:bg-primary hover:brightness-90"
            onClick={() => {
              renterMessage != "" && sendReservation();
            }}
            disabled={ispending}
          >
            Continue
          </Button>
        </div>
      </DialogFooter>
    </DialogContent>
  ) : step === 2 ? (
    <DialogContent>
      <DialogDescription className="shadow-custom mx-auto flex w-full flex-col justify-center space-y-4 p-8">
        <img src={success} alt="success" className="mx-auto w-1/3" />
        <p className="text-center text-6xl font-bold text-black">
          Votre demande est passée avec succés
        </p>
      </DialogDescription>
      <DialogClose
        onClick={() => setStep(0)}
        className="absolute right-4 top-4 opacity-70 ring-offset-white transition-opacity data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none"
      >
        <Cross2Icon className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogClose>
    </DialogContent>
  ) : (
    <DialogContent>
      <DialogDescription className="shadow-custom mx-auto flex w-full flex-col justify-center space-y-4 p-8">
        <img src={cross} alt="success" className="mx-auto w-1/3" />
        <p className="text-center text-6xl font-bold text-black">
          Votre demande n'a pas pu être envoyée
        </p>
        <p className="text-center text-3xl text-black">réssayer plus tard</p>
      </DialogDescription>
      <DialogClose
        onClick={() => setStep(0)}
        className="absolute right-4 top-4 opacity-70 ring-offset-white transition-opacity data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none"
      >
        <Cross2Icon className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogClose>
    </DialogContent>
  );
};
