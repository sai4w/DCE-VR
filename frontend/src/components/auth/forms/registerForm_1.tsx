import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/ui/form";
import { Input } from "@components/ui/input";
import { Checkbox } from "@components/ui/checkbox";
import { Button } from "@components/ui/button";
import { register_1_Schema } from "@src/schemas";
import { registerType } from "@src/types";

interface RegisterFormProps {
  setFormId: (id: number) => void;
  formData: registerType;
  setFormData: (data: registerType) => void;
}

export const RegisterForm_1 = ({
  setFormId,
  formData,
  setFormData,
}: RegisterFormProps) => {
  const form = useForm<z.infer<typeof register_1_Schema>>({
    resolver: zodResolver(register_1_Schema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      termsAndConditions: false,
    },
  });
  const onSubmit = async (data: z.infer<typeof register_1_Schema>) => {
    setFormData({ ...formData, register_1: data });
    setFormId(1);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <div className="flex justify-between gap-8">
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium capitalize text-stone-700">
                  nom
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="John"
                    {...field}
                    className="rounded-3xl p-6 focus:border-primary focus:outline-primary"
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
                <FormLabel className="text-sm font-medium capitalize text-stone-700">
                  prenom
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Doe"
                    {...field}
                    className="rounded-3xl p-6 focus:border-primary focus:outline-primary"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium capitalize text-stone-700">
                Address mail
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Example@gmail.com"
                  {...field}
                  className="rounded-3xl p-6 focus:border-primary focus:outline-primary"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium capitalize text-stone-700">
                Mot de passe
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="****************"
                  {...field}
                  className="rounded-3xl p-6 focus:border-primary focus:outline-primary"
                  type="password"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="termsAndConditions"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex items-center space-x-2 p-4">
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    id="termsAndConditions"
                  />
                  <FormLabel htmlFor="termsAndConditions">
                    J'accepte les termes et conditions{" "}
                  </FormLabel>
                </div>
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full rounded-3xl bg-gradient-to-r from-[#1DA684] to-[#BEDC7C] py-6 text-lg transition-all duration-1000 hover:from-[#BEDC7C] hover:to-[#1DA684] md:py-8 md:text-2xl"
        >
          Continue
        </Button>
      </form>
    </Form>
  );
};
