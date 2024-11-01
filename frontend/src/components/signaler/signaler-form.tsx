import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { ControllerRenderProps, useForm } from "react-hook-form";
import { signalerSchema } from "@src/schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { InputImg } from "./input-img";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Map } from "../map";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import axios from "axios";
import useUserStore from "@src/store/userStore";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export const SignalerForm = () => {
  const [ispending, startTransition] = useTransition();
  const navigate = useNavigate();
  const { user } = useUserStore();
  const form = useForm<Zod.infer<typeof signalerSchema>>({
    resolver: zodResolver(signalerSchema),
    defaultValues: {
      imgs: [],
      title: "",
      description: "",
      location: "",
    },
  });
  const onFileChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: ControllerRenderProps<Zod.infer<typeof signalerSchema>, "imgs">,
  ) => {
    const files = e.target.files;
    if (files) {
      field.onChange([...field.value, ...files]);
    }
  };
  const onSubmit = (data: Zod.infer<typeof signalerSchema>) => {
    const formData = new FormData();
    data.imgs.forEach((img) => {
      formData.append("imgs", img);
    });
    formData.append("id_signaler", user._id);
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("location", data.location);
    const url = import.meta.env.VITE_API_URL + "/signaler";
    startTransition(() => {
      axios
        .post(url, formData)
        .then((res) => {
          console.log(res);
          navigate("/signals");
          toast.success("Signalement ajouté avec succès");
        })
        .catch((error) => {
          console.error(error);
          toast.error(
            error.response.data || "Erreur lors de l'ajout du signalement",
          );
        })
        .finally(() => {
          form.reset();
        });
    });
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-16">
        <div className="flex h-fit w-full flex-col justify-between gap-8">
          <FormField
            control={form.control}
            name="imgs"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl font-semibold capitalize text-stone-500">
                  Capturer : Ajouter des photos
                </FormLabel>
                <FormControl>
                  <div className="grid grid-cols-2 gap-12">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <InputImg
                        key={i}
                        type="file"
                        id={"img" + i}
                        multiple
                        onChange={(e) => onFileChangeHandler(e, field)}
                        disabled={ispending}
                      />
                    ))}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex space-x-2">
            <Button
              type="reset"
              variant={"outline"}
              className="w-full border-primary text-primary hover:bg-primary hover:text-white"
              disabled={ispending}
              onClick={() => form.reset()}
            >
              Annuler
            </Button>
            <Button
              type="submit"
              className="relative w-full border bg-primary text-white hover:border-primary hover:bg-white hover:text-primary"
              disabled={ispending}
            >
              {ispending ? "attender ..." : "Publier"}
              <ArrowRightIcon className="absolute right-4 h-6 w-6" />
            </Button>
          </div>
        </div>
        <div className="flex h-fit w-full flex-col gap-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl font-semibold capitalize text-stone-500">
                  Titre de signalement
                </FormLabel>
                <Input
                  {...field}
                  className="w-full rounded-2xl border p-4 text-lg placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-stone-700 focus:ring-opacity-50"
                  placeholder="Ecrire ici ..."
                  disabled={ispending}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl font-semibold capitalize text-stone-500">
                  Description
                </FormLabel>
                <Textarea
                  {...field}
                  className="h-32 max-h-32 min-h-32 w-full rounded-2xl border border-stone-200 bg-white p-4 text-lg placeholder:text-sm  focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-opacity-50"
                  disabled={ispending}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl font-semibold capitalize text-stone-500">
                  choisir votre localisation
                </FormLabel>
                <Input
                  {...field}
                  className="w-full rounded-2xl border p-4 text-lg placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-stone-700 focus:ring-opacity-50"
                  placeholder="Ecrire ici ..."
                  disabled={ispending}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="h-[275px]">
            <Map />
          </div>
        </div>
      </form>
    </Form>
  );
};
