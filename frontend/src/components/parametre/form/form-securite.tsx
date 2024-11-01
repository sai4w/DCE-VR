import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@src/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@src/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@src/components/ui/form";
import { Input } from "@src/components/ui/input";
import { parametreSecuriteSchema } from "@src/schemas";
import useUserStore from "@src/store/userStore";
import axios from "axios";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export const FormSecurite = () => {
  const [ispending, startTransition] = useTransition();
  const { user, setUser } = useUserStore();
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof parametreSecuriteSchema>>({
    resolver: zodResolver(parametreSecuriteSchema),
    defaultValues: {
      oldPassword: "",
      email: user?.email,
      phone: user?.phone,
      newPassword: "",
      confirmPassword: "",
    },
  });

  const { handleSubmit } = form;
  const checkFields = () => {
    const values = form.getValues();
    if (!values.email && !values.phone && !values.newPassword) {
      form.setError("email", {
        type: "manual",
        message:
          "Au moins un champ (email, téléphone ou nouveau mot de passe) doit être rempli",
      });
      form.setError("phone", {
        type: "manual",
        message:
          "Au moins un champ (email, téléphone ou nouveau mot de passe) doit être rempli",
      });
      form.setError("newPassword", {
        type: "manual",
        message:
          "Au moins un champ (email, téléphone ou nouveau mot de passe) doit être rempli",
      });
      return;
    }
    if (values.newPassword != values.confirmPassword) {
      form.setError("confirmPassword", {
        type: "manual",
        message: "Les mots de passe ne correspondent pas",
      });
      return;
    }
    setOpen(true);
    form.clearErrors();
  };
  const onSubmit = (values: z.infer<typeof parametreSecuriteSchema>) => {
    // if email & phone are changed from user's data
    if (values.email && values.email === user.email) {
      delete values.email;
    }
    if (values.phone && values.phone === user.phone) {
      delete values.phone;
    }

    if (values.newPassword && values.newPassword !== values.confirmPassword) {
      form.setError("confirmPassword", {
        type: "manual",
        message: "Les mots de passe ne correspondent pas",
      });
      return;
    }

    // Remove empty values
    const filteredValues = Object.keys(values).reduce(
      (acc, key) => {
        const value = values[key as keyof typeof values];
        if (value) {
          acc[key as keyof typeof values] = value;
        }
        return acc;
      },
      {} as Partial<z.infer<typeof parametreSecuriteSchema>>,
    );
    console.log(filteredValues);
    const updateUser = async () => {
      const url = import.meta.env.VITE_API_URL + "/user/update/" + user._id;
      axios
        .post(url, { data: filteredValues })
        .then((res) => {
          console.log(res);
          setUser(res.data);
          toast.success("votre profile a été mis à jour avec succès");
        })
        .catch((error) => {
          console.error(error);
          toast.error(
            error.response.data ||
              "une erreur s'est produite lors de la mise à jour",
          );
          form.resetField("oldPassword");
        })
        .finally(() => {
          setOpen(false);
        });
    };
    startTransition(() => {
      updateUser();
    });
  };

  return (
    <Form {...form}>
      <form
        className="w-1/2 space-y-8 px-8"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex justify-between">
          <p className="text-2xl font-bold">Sécurité</p>
          <div className="flex gap-2">
            <Button
              type="reset"
              onClick={() => form.reset()}
              className="w-28 rounded-xl border-2 border-primary bg-transparent py-6 text-lg text-primary hover:bg-whiteR "
            >
              Annuler
            </Button>
            <Dialog open={open} onOpenChange={setOpen}>
              <Button
                onClick={checkFields}
                type="submit"
                className="w-full rounded-xl border-2 border-primary bg-primary px-4 py-6 text-lg font-bold text-white hover:bg-primary hover:brightness-90"
              >
                Enregister
              </Button>
              <DialogContent className="w-[600px]">
                <DialogHeader>
                  <DialogTitle className="p-8 text-3xl font-medium">
                    Veuillez saisir votre mot de passe pour continuer
                  </DialogTitle>
                  <DialogDescription className="px-16 py-8">
                    <FormField
                      control={form.control}
                      name="oldPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg font-medium capitalize text-stone-700">
                            Mot de passe
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="****************"
                              {...field}
                              className="rounded-md border-2 border-stone-300 p-4"
                              type="password"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter className="flex justify-end gap-4 border-t-2 bg-white p-6">
                  <div className="flex items-center gap-4">
                    <DialogClose asChild>
                      <Button
                        disabled={ispending}
                        className="w-full border-2 border-primary bg-white py-5 text-lg font-medium text-primary hover:bg-primary hover:text-white hover:brightness-90"
                      >
                        Annuler
                      </Button>
                    </DialogClose>
                    <Button
                      onClick={handleSubmit(onSubmit)}
                      disabled={ispending}
                      className="w-full border-2 border-primary bg-primary py-5 text-lg font-medium text-white hover:bg-primary hover:brightness-90"
                    >
                      Continue
                    </Button>
                  </div>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="my-10 flex h-[2px] bg-stone-300" />
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-lg font-medium capitalize text-stone-700">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Entrez votre email ici"
                    {...field}
                    className="w-full rounded-md border-2 border-stone-300 p-4"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="w-7/12">
                <FormLabel className="text-lg font-medium capitalize text-stone-700">
                  Téléphone
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="+216 99 999 999"
                    {...field}
                    className="w-full rounded-md border-2 border-stone-300 p-4"
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value.match(/^\d{0,8}$/)) {
                        field.onChange(e);
                      }
                    }}
                    type="tel"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-medium capitalize text-stone-700">
                  Nouveau Mot de passe
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="****************"
                    {...field}
                    className="rounded-md border-2 border-stone-300 p-4"
                    type="password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-medium capitalize text-stone-700">
                  Confirmer Mot de passe
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="****************"
                    {...field}
                    className="rounded-md border-2 border-stone-300 p-4"
                    type="password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
};
