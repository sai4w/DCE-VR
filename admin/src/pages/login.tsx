import bglogin from "@src/assets/images/bg-login.png";
import logo from "@src/assets/icons/logo.svg";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@src/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@src/components/ui/input";
import { Checkbox } from "@src/components/ui/checkbox";
import axios from "axios";
import useUserStore from "@src/store/userStore";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useUserStore();
  const formSchema = z.object({
    email: z
      .string()
      .min(1, {
        message: "Email is required.",
      })
      .email(),
    password: z.string().min(6, {
      message: "Password must be at least 8 characters.",
    }),
    termsAndConditions: z.boolean().optional(),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const { email, password } = data;
    const url = import.meta.env.VITE_API_URL + "/admin";
    await axios
      .post(url, { email, password })
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
        toast.success("Login success");
        navigate("/dashboard");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Login failed");
      })
      .finally(() => {
        form.reset();
      });
  };
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <img
        src={bglogin}
        className="absolute -z-50 h-screen w-screen object-cover object-center"
      />
      <div className="relative group w-1/2 h-5/6 rounded-md bg-white/60 overflow-hidden flex  justify-center items-center">
        <span className="ease absolute left-0 top-0 h-0 w-0 border-t-8 border-white/60 rounded-full transition-all duration-1000 group-hover:w-full"></span>
        <span className="ease absolute left-0 top-0 h-0 w-0 border-r-8 border-white/60 rounded-full transition-all duration-1000 group-hover:h-full"></span>
        <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-8 border-white/60 rounded-full transition-all duration-1000 group-hover:w-full"></span>
        <span className="ease absolute bottom-0 right-0 h-0 w-0 border-l-8 border-white/60 rounded-full transition-all duration-1000 group-hover:h-full"></span>
        <div className="w-1/2 flex items-center flex-col gap-12">
          <img src={logo} className="size-full" />
          <div className="w-full flex flex-col">
            <p className="text-4xl font-semibold text-primary">SIGN IN</p>
            <p className="text-stone-500 text-sm">
              Enter your email and password to login
            </p>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 w-full"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-stone-500 text-sm">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="saisir email"
                        {...field}
                        className="bg-white text-stone-700 focus-visible:outline focus-visible:outline-primary focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-50 focus-visible:border-primary focus-visible:border-opacity-50 focus-visible:ring-offset-primary focus-visible:ring-offset-opacity-50"
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
                    <FormLabel className="text-stone-500 text-sm">
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="********"
                        {...field}
                        className="bg-white text-stone-700 focus-visible:outline focus-visible:outline-primary focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-50 focus-visible:border-primary focus-visible:border-opacity-50 focus-visible:ring-offset-primary focus-visible:ring-offset-opacity-50"
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
                      <div className="flex space-x-2">
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          id="termsAndConditions"
                        />
                        <FormLabel
                          htmlFor="termsAndConditions"
                          className="text-stone-500 text-xs"
                        >
                          Remember me
                        </FormLabel>
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
              <button
                type="submit"
                className="w-full py-2 bg-gradient-to-r from-[#1DA684] to-[#BEDC7C] text-white rounded-md hover:shadow-md hover:from-[#BEDC7C] hover:to-[#1DA684] transition-all duration-300 ease-in-out"
              >
                Submit
              </button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
