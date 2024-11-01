import { zodResolver } from "@hookform/resolvers/zod";
import useUserStore from "@src/store/userStore";
import axios from "axios";
import { useTransition } from "react";
import { ControllerRenderProps, useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { InputImg } from "../signaler/input-img";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Textarea } from "../ui/textarea";
import { nettoyageSchema } from "@src/schemas";
import { Signal } from "@src/types";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface NettoyageFormProps {
  signal: Signal;
}
export const NettoyageForm = ({ signal }: NettoyageFormProps) => {
  const [ispending, startTransition] = useTransition();
  const navigate = useNavigate();
  const { user } = useUserStore();
  const form = useForm<Zod.infer<typeof nettoyageSchema>>({
    resolver: zodResolver(nettoyageSchema),
    defaultValues: {
      imgs: [],
      description: "",
    },
  });
  const onFileChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: ControllerRenderProps<Zod.infer<typeof nettoyageSchema>, "imgs">,
  ) => {
    const files = e.target.files;
    if (files) {
      field.onChange([...field.value, ...files]);
    }
  };
  const onSubmit = (data: Zod.infer<typeof nettoyageSchema>) => {
    const formData = new FormData();
    data.imgs.forEach((img) => {
      formData.append("imgs", img);
    });
    formData.append("id_cleaner", user._id);
    formData.append("id_signal", signal._id);
    formData.append("description", data.description);
    const url = import.meta.env.VITE_API_URL + "/nettoyer";
    startTransition(() => {
      axios
        .post(url, formData)
        .then((res) => {
          console.log(res);
          navigate("/signal/" + signal._id);
          toast.success("Signal nettoyé avec succès");
        })
        .catch((error) => {
          console.error(error);
          toast.error(
            error.response.data || "Erreur lors du nettoyage du signal",
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
                  Capturer : Ajouter des photos ou videos
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
        </div>
        <div className="flex h-full w-full flex-col justify-between gap-8">
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
                  className="h-full max-h-[590px] min-h-96 w-full rounded-2xl border border-stone-200 bg-white p-4 text-lg placeholder:text-sm  focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-opacity-50"
                  disabled={ispending}
                />
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
      </form>
    </Form>
  );
};
