import { zodResolver } from "@hookform/resolvers/zod";
import { ControllerRenderProps, useForm } from "react-hook-form";
import { postSchema } from "@src/schemas";
import { Button } from "@components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/ui/form";
import { InputImg } from "./input-img";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useTransition } from "react";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import useUserStore from "@src/store/userStore";
import { Map } from "../map";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
export const PosterForm = () => {
  const { user } = useUserStore();
  const [ispending, startTransition] = useTransition();
  const navigate = useNavigate();
  const form = useForm<Zod.infer<typeof postSchema>>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      imgs: [],
      title: "",
      description: "",
      categorie: "",
      location: "",
      value: "",
      minTime: "",
      day: "",
      week: "",
      month: "",
    },
  });
  const onFileChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: ControllerRenderProps<Zod.infer<typeof postSchema>, "imgs">,
  ) => {
    const files = e.target.files;
    if (files) {
      field.onChange([...field.value, ...files]);
    }
  };
  const url = import.meta.env.VITE_API_URL + "/post";
  const onSubmit = async (data: Zod.infer<typeof postSchema>) => {
    const formData = new FormData();
    data.imgs.forEach((img) => {
      formData.append("imgs", img);
    });
    formData.append("id_owner", user?._id as string);
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.categorie);
    formData.append("location", data.location);
    formData.append("originalPrice", data.value);
    formData.append("minTime", data.minTime);
    formData.append("price.day", data.day);
    formData.append("price.week", data.week);
    formData.append("price.month", data.month);

    startTransition(() => {
      axios
        .post(url, formData)
        .then((res) => {
          console.log(res);
          form.reset();
          navigate("/posts");
          toast.success("votre élément a été ajouté avec succés");
        })
        .catch((error) => {
          toast.error(error.response.data || "une erreur s'est produite");
          console.error(error);
        })
        .finally(() => {
          form.reset();
        });
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="imgs"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl font-semibold capitalize text-stone-500">
                Images
              </FormLabel>
              <FormControl>
                <div className="flex gap-8">
                  {Array.from({ length: 5 }).map((_, i) => (
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
              <FormDescription className="flex justify-between text-stone-500">
                <p>La premiere image est la photo de couverture </p>
                <p>Vous pouvez ajouter jusqu&apos;à 5 images</p>
              </FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl font-semibold capitalize text-stone-500">
                Titre de l&apos;object
              </FormLabel>
              <Input
                {...field}
                className="w-full rounded-2xl border p-4 text-lg placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-stone-700 focus:ring-opacity-50"
                placeholder="titre de max 30 caractères"
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
                className="h-64 max-h-96 min-h-24 w-full rounded-2xl border border-stone-200 bg-white p-4 text-lg placeholder:text-sm  focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-opacity-50"
                disabled={ispending}
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="categorie"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl font-semibold capitalize text-stone-500">
                Categorie
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full rounded-2xl border bg-white px-4 py-5 text-lg focus:outline-none focus:ring-2 focus:ring-stone-700 focus:ring-opacity-50">
                    <SelectValue
                      placeholder="Choisir une categorie"
                      className="placeholder:text-sm placeholder:text-stone-200"
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Electronique">Electronique</SelectItem>
                  <SelectItem value="Récycler">Récycler</SelectItem>
                  <SelectItem value="Mecanique">Mecanique</SelectItem>
                </SelectContent>
              </Select>
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
        <div className="h-96">
          <Map />
        </div>

        <div className="flex w-full justify-between gap-32 max-md:flex-col">
          <FormField
            control={form.control}
            name="day"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl font-semibold capitalize text-stone-500">
                  Prix par jour
                </FormLabel>
                <Input
                  {...field}
                  className="w-full rounded-2xl border p-4 text-lg placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-stone-700 focus:ring-opacity-50"
                  placeholder="Jour"
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value.match(/^\d{0,8}$/)) {
                      field.onChange(e);
                    }
                  }}
                  type="tel"
                  disabled={ispending}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="week"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl font-semibold capitalize text-stone-500">
                  Prix par semaine
                </FormLabel>
                <Input
                  {...field}
                  className="w-full rounded-2xl border p-4 text-lg placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-stone-700 focus:ring-opacity-50"
                  placeholder="Semaine"
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value.match(/^\d{0,8}$/)) {
                      field.onChange(e);
                    }
                  }}
                  type="tel"
                  disabled={ispending}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="month"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl font-semibold capitalize text-stone-500">
                  Prix par mois
                </FormLabel>
                <Input
                  {...field}
                  className="w-full rounded-2xl border p-4 text-lg placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-stone-700 focus:ring-opacity-50"
                  placeholder="Mois"
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value.match(/^\d{0,8}$/)) {
                      field.onChange(e);
                    }
                  }}
                  type="tel"
                  disabled={ispending}
                />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="value"
          render={({ field }) => (
            <FormItem className="w-1/4">
              <FormLabel className="text-xl font-semibold capitalize text-stone-500">
                Prix de l&apos;objet (DT)
              </FormLabel>
              <Input
                {...field}
                className="w-full rounded-2xl border p-4 text-lg placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-stone-700 focus:ring-opacity-50"
                placeholder="Prix"
                onChange={(e) => {
                  const value = e.target.value;
                  if (value.match(/^\d{0,8}$/)) {
                    field.onChange(e);
                  }
                }}
                type="tel"
                disabled={ispending}
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="minTime"
          render={({ field }) => (
            <FormItem className="w-1/4">
              <FormLabel className="text-xl font-semibold capitalize text-stone-500">
                Jours minimum de locaction
              </FormLabel>
              <Input
                {...field}
                className="w-full rounded-2xl border p-4 text-lg placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-stone-700 focus:ring-opacity-50"
                placeholder="Jours minimum de locaction"
                onChange={(e) => {
                  const value = e.target.value;
                  if (value.match(/^\d{0,8}$/)) {
                    field.onChange(e);
                  }
                }}
                type="tel"
                disabled={ispending}
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end space-x-2">
          <Button
            type="reset"
            variant={"outline"}
            className="border-primary text-primary hover:bg-primary hover:text-white"
            disabled={ispending}
            onClick={() => form.reset()}
          >
            Annuler
          </Button>
          <Button
            type="submit"
            className="border bg-primary text-white hover:border-primary hover:bg-white hover:text-primary"
            disabled={ispending}
          >
            {ispending ? "attender ..." : "lister un nouveau element"}
          </Button>
        </div>
      </form>
    </Form>
  );
};
