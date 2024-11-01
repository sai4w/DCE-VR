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

import { Button } from "@components/ui/button";
import { register_3_Schema } from "@src/schemas";
import { Professions, registerType } from "@src/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@src/components/ui/select";
import { ImgSelector } from "@src/components/imgSelector";
import { avatars } from "@src/assets/avatar/avatar";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
interface RegisterFormProps {
  formData: registerType;
}

export const RegisterForm_3 = ({ formData }: RegisterFormProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof register_3_Schema>>({
    resolver: zodResolver(register_3_Schema),
    defaultValues: {
      profession: "",
      avatar: "",
    },
  });
  const onSubmit = async (data: z.infer<typeof register_3_Schema>) => {
    const Register = async () => {
      const url = import.meta.env.VITE_API_URL + "/auth/register";
      const { avatar, profession } = data;
      const {
        register_1: { firstname, lastname, email, password },
        register_2: { phone, region, gender, birth },
      } = formData;
      setLoading(true);
      try {
        await axios.post(url, {
          firstname,
          lastname,
          email,
          password,
          phone,
          region,
          gender,
          birth,
          avatar,
          profession,
        });
        navigate("/login");
        toast.success("Inscription réussie. Connectez-vous.");
      } catch (error) {
        console.log("Register error", error);
        toast.error("Erreur lors de l'inscription.");
      } finally {
        setLoading(false);
        form.reset();
      }
    };
    Register();
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="profession"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium capitalize text-stone-700">
                profession
              </FormLabel>
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger
                    className="rounded-3xl bg-white p-6 focus:ring-primary"
                    value="choisir"
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
        <FormField
          control={form.control}
          name="avatar"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium capitalize text-stone-700">
                choisir votre avatar
              </FormLabel>
              <FormControl>
                <div className="grid grid-cols-4 gap-4">
                  {avatars.map((avatar, index) => (
                    <ImgSelector
                      key={index}
                      img={avatar}
                      disabled={loading}
                      i={index.toString()}
                      fieldValue={field.value}
                      setSelector={() => field.onChange(index.toString())}
                    />
                  ))}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={loading}
          className="w-full rounded-3xl bg-gradient-to-r from-[#1DA684] to-[#BEDC7C] py-6 transition-all duration-1000 hover:from-[#BEDC7C] hover:to-[#1DA684] md:py-8 md:text-2xl"
        >
          confirmer votre inscription
        </Button>
      </form>
    </Form>
  );
};
