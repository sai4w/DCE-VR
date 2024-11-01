import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { z } from "zod";
import { loginSchema } from "@src/schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/ui/form";
import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";
import useUserStore from "@src/store/userStore";
import { toast } from "sonner";

interface LoginFormProps {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
}
export const LoginForm = ({ setLoading, loading }: LoginFormProps) => {
  const { setUser } = useUserStore();
  const navigate = useNavigate();
  const location = useLocation();
  const { from } = location.state?.from || { pathname: "/" };

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  function onSubmit(values: z.infer<typeof loginSchema>) {
    const Login = async () => {
      const { email, password } = values;
      const url = import.meta.env.VITE_API_URL + "/auth/login";
      setLoading(true);
      try {
        const response = await axios.post(url, {
          email,
          password,
        });

        const user = response.data;
        delete user.authentication;
        setUser(user);
        navigate(from, { replace: true });
        toast.success("Connexion réussie.");
      } catch (error) {
        console.log("Login error", error);
        toast.error("Adresse mail ou mot de passe incorrecte.");
      } finally {
        setLoading(false);
      }
    };
    Login();
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
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
                  disabled={loading}
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
                  disabled={loading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="button"
          variant={"link"}
          className="px-0 text-base font-normal"
          disabled={loading}
        >
          Mot de passe oublié ?
        </Button>
        <Button
          type="submit"
          disabled={loading}
          className="w-full rounded-3xl bg-gradient-to-r from-[#1DA684] to-[#BEDC7C] py-6 text-lg transition-all duration-1000 hover:from-[#BEDC7C] hover:to-[#1DA684] md:py-8 md:text-2xl"
        >
          connexion
        </Button>
      </form>
    </Form>
  );
};
