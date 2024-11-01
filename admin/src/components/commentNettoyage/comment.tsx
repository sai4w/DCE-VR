import { ArrowLeftIcon, CrossCircledIcon } from "@radix-ui/react-icons";
import { avatars } from "@src/assets/avatar/avatar";
import { formatDate } from "@src/libs/formatDate";
import { Nettoyage } from "@src/types";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import axios from "axios";
import { toast } from "sonner";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "../ui/dialog";
interface CommentProps {
  nettoyage: Nettoyage;
}
export const Comment = ({ nettoyage }: CommentProps) => {
  const url = import.meta.env.VITE_APP_URL + "/signal/" + nettoyage.id_signal;
  const goTo = (url: string) => {
    window.open(url, "_blank");
  };
  const user = nettoyage.user;
  const cleaning = nettoyage.cleaning;
  const navigate = useNavigate();
  const accepte = async () => {
    const url = import.meta.env.VITE_API_URL + "/signal";
    try {
      const res = await axios.put(url, {
        status: "accepté",
        id_signal: nettoyage.id_signal,
        id_clean: cleaning._id,
      });
      res.data &&
        toast.success("Nettoyage accepté") &&
        navigate("/nettoyagePosts");
    } catch (error) {
      toast.error("Erreur lors de l'acceptation du nettoyage");
      console.error(error);
    }
  };
  const refuse = async () => {
    const url = import.meta.env.VITE_API_URL + "/signal";
    try {
      const res = await axios.put(url, {
        status: "refusé",
        id_signal: nettoyage.id_signal,
        id_clean: cleaning._id,
      });
      res.data &&
        toast.success("Nettoyage refusé") &&
        navigate("/nettoyagePosts");
    } catch (error) {
      toast.error("Erreur lors du refus du nettoyage");
      console.error(error);
    }
  };
  return (
    <div className="w-full shadow bg-white rounded my-8">
      <div className="flex h-fit w-full items-center p-4 gap-4 border-b">
        <ArrowLeftIcon
          className="h-6 w-6 text-stone-800 cursor-pointer"
          onClick={() => navigate("/nettoyagePosts")}
        />
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div className="flex gap-2">
          <img
            src={avatars[Number(user.avatar)]}
            alt="avatar"
            className="size-12"
          />
          <div>
            <p className="font-medium flex gap-2">
              {nettoyage.user.firstname} {nettoyage.user.lastname}
              <div
                className={`size-2 flex rounded-full text-xs ${
                  cleaning.status === "accepté"
                    ? "bg-green-500 text-white"
                    : cleaning.status === "refusé"
                    ? "bg-red-500 text-white"
                    : "bg-yellow-500 text-black"
                }`}
              />
            </p>

            <p className="text-stone-500 text-sm">
              {formatDate(new Date(cleaning.date), "/")}
            </p>
          </div>
        </div>
        <div>{cleaning.description}</div>
        <div className="flex justify-center items-start w-full flex-wrap">
          {cleaning.images.map((image, index) => (
            <Dialog>
              <DialogTrigger asChild>
                <img
                  key={index}
                  src={image}
                  alt={`image-${index}`}
                  className="max-h-80 w-1/4 object-contain"
                />
              </DialogTrigger>
              <DialogContent className="m-auto max-h-full max-w-full p-0">
                <img
                  key={index}
                  src={image}
                  alt={`image-${index}`}
                  className="h-full w-full rounded border-2 border-stone-300 object-cover object-center"
                />
                <DialogClose className="absolute -right-2 -top-2 rounded-full bg-white p-[-4px] text-black">
                  <CrossCircledIcon className="size-6" />
                </DialogClose>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center h-24 w-full gap-4">
        {" "}
        {cleaning.status == "pending" && (
          <Button
            className="px-8 py-2 bg-white text-blue-500 border border-blue-500 hover:bg-blue-50"
            onClick={() => accepte()}
          >
            Accepter
          </Button>
        )}
        {cleaning.status == "pending" && (
          <Button
            className="px-8 py-2 bg-white text-red-500 border border-red-500 hover:bg-red-50 hover:shadow hover:shadow-red-500"
            onClick={() => refuse()}
          >
            Refuser
          </Button>
        )}
        <Button
          className="px-8 py-2 bg-gradient text-white  hover:shadow-neon"
          onClick={() => goTo(url)}
        >
          Accéder au post
        </Button>
      </div>
    </div>
  );
};
