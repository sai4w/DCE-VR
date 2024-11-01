import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon } from "@radix-ui/react-icons";
import { CustomCalendar } from "@src/components/customCalendar";
import { Button } from "@src/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@src/components/ui/form";
import { Input } from "@src/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@src/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@src/components/ui/select";
import { parametreGeneraleSchema } from "@src/schemas";
import useUserStore from "@src/store/userStore";
import { Professions, gouvernorats } from "@src/types";
import axios from "axios";
import { format } from "date-fns";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export const FormGenerale = () => {
  const { user, setUser } = useUserStore();
  const [ispending, startTransition] = useTransition();
  // every time the user changes, reset the form
  const form = useForm<z.infer<typeof parametreGeneraleSchema>>({
    resolver: zodResolver(parametreGeneraleSchema),
    defaultValues: {
      firstname: user?.firstname,
      lastname: user?.lastname,
      birth: new Date(user?.birth),
      region: user?.region as gouvernorats | undefined,
      proffesional: user?.proffesional as Professions | undefined,
    },
  });
  const onSubmit = (data: z.infer<typeof parametreGeneraleSchema>) => {
    const isDataChanged =
      data.firstname !== user?.firstname ||
      data.lastname !== user?.lastname ||
      new Date(data.birth).getTime() !== new Date(user?.birth).getTime() ||
      data.region !== user?.region ||
      data.proffesional !== user?.proffesional;
    if (isDataChanged) {
      const changedData = Object.fromEntries(
        Object.entries(data).filter(([key, value]) => {
          if (key === "birth") {
            return (
              new Date(value).getTime() !== new Date(user?.birth).getTime()
            );
          }
          return value !== user?.[key as keyof typeof user];
        }),
      );
      const updateUser = async () => {
        const url = import.meta.env.VITE_API_URL + "/user/update/" + user._id;
        axios
          .post(url, { data: changedData })
          .then((res) => {
            setUser(res.data);
            toast.success("votre profile a été mis à jour avec succès");
          })
          .catch((error) => {
            console.error(error);
            toast.error(
              error.response.data ||
                "une erreur s'est produite lors de la mise à jour",
            );
          });
      };
      startTransition(() => {
        updateUser();
      });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-1/2 space-y-12 px-8"
      >
        <div className="flex justify-between">
          <p className="text-2xl font-bold">Informations Générale</p>
          <div className="flex gap-2">
            <Button
              type="reset"
              disabled={ispending}
              onClick={() => {
                form.reset();
              }}
              className="w-28 rounded-xl border-2 border-primary bg-transparent py-6 text-lg text-primary hover:bg-whiteR "
            >
              Annuler
            </Button>
            <Button
              disabled={ispending}
              type="submit"
              className="w-full rounded-xl border-2 border-primary bg-primary px-4 py-6 text-lg font-bold text-white hover:bg-primary  hover:brightness-90"
            >
              Enregister
            </Button>
          </div>
        </div>
        <div className="my-10 flex h-[2px] bg-stone-300" />
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-medium capitalize text-stone-700">
                  Prénom
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="ecrivez votre prénom ici"
                    {...field}
                    disabled={ispending}
                    className="rounded-md border-2 border-stone-300 p-4"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-medium capitalize text-stone-700">
                  Nom de famille
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="ecrivez votre nom de famille ici"
                    {...field}
                    disabled={ispending}
                    className="rounded-md border-2 border-stone-300 p-4"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="birth"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-medium capitalize text-stone-700">
                Date de naissance
              </FormLabel>
              <Popover>
                <PopoverTrigger asChild className="w-full">
                  <FormControl>
                    <Button
                      variant={"outline"}
                      disabled={ispending}
                      className="rounded-md border-2 border-stone-300 bg-white p-5 hover:bg-whiteR"
                    >
                      {format(field.value, "PPP")}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent
                  className="mx-auto flex w-max justify-start p-0"
                  align="start"
                >
                  <CustomCalendar
                    mode="single"
                    selected={field.value as Date}
                    onSelect={field.onChange}
                    className="flex items-center justify-center self-center p-4 "
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="region"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium capitalize text-stone-700">
                  region
                </FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger
                      disabled={ispending}
                      className="rounded-md border-2 border-stone-300 bg-white p-4"
                    >
                      <SelectValue placeholder="choisir votre region" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Object.values(gouvernorats).map((region) => (
                      <SelectItem key={region} value={region}>
                        {region}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="proffesional"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium capitalize text-stone-700">
                  profession
                </FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger
                      disabled={ispending}
                      className="rounded-md border-2 border-stone-300 bg-white p-4"
                    >
                      <SelectValue placeholder="choisir votre prefession" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Object.values(Professions).map((profession) => (
                      <SelectItem key={profession} value={profession}>
                        {profession}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
};
