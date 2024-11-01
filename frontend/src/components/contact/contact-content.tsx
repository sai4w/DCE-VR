import { BreadcrumbUI } from "../BreadcrumbUI";
import bg from "@src/assets/images/apropos/bg-apropos.png";
import cover from "@src/assets/images/cover-contact.png";
import arrowspin from "@src/assets/icons/arrowspin.svg";
import marker from "@src/assets/icons/contact/marker.svg";
import phone from "@src/assets/icons/contact/phone.svg";
import email from "@src/assets/icons/contact/email.svg";
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
import { contactSchema } from "@src/schemas";
import { Textarea } from "../ui/textarea";
import { ButtonGradient } from "../ui/button-gradient";
export const ContactContent = () => {
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {},
  });
  const onSubmit = (data: z.infer<typeof contactSchema>) => {
    console.log(data);
  };
  const path = [
    { name: "Accueil", path: "/" },
    { name: "À Propos", path: "/apropos" },
    { name: "Contact", path: "" },
  ];
  return (
    <div className="container my-12 flex w-full flex-1 flex-col justify-start gap-8 bg-transparent px-2">
      <div
        className="absolute -right-6 top-72 -z-10 h-full w-full bg-cover object-scale-down"
        style={{ backgroundImage: `url(${bg})` }}
      />
      <BreadcrumbUI path={path} />
      <div className="flex gap-10">
        <div
          className="flex h-full w-full flex-col gap-8 rounded-2xl bg-cover bg-center p-8"
          style={{
            backgroundImage: `url(${cover})`,
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <p className="text-[41px] font-bold text-white">
            Avez-vous une idée en tête ?<br /> Contactez-nous.
          </p>
          <p className="text-lg text-white">
            Contactez-nous et partagez vos idées innovantes avec notre équipe
            expérimentée - nous sommes impatients de discuter avec vous.
          </p>
          <img src={arrowspin} alt="arrowspin" className="h-20 w-20" />
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <img src={marker} alt="marker" className="size-10" />
              <p className="font-light text-white">
                Q5WF+H93, Rue Kouttab ouazir, Tunis
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img src={phone} alt="phone" className="size-10" />
              <p className="font-light text-white">+216 25 934 901</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={email} alt="email" className="size-10" />
              <p className="font-light text-white">dce.vr.v1@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="flex h-full w-full flex-col">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-8"
            >
              <div className="flex w-full gap-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xl font-bold text-stone-900">
                        Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="joe doe"
                          {...field}
                          className="focus-visible:ring-offset-opacity-50 rounded-full bg-white p-10 text-xl text-stone-700 shadow-lg focus-visible:border-primary focus-visible:border-opacity-50 focus-visible:outline focus-visible:outline-primary focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-50 focus-visible:ring-offset-primary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xl font-bold text-stone-900">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="saisir email"
                          {...field}
                          className="focus-visible:ring-offset-opacity-50 rounded-full bg-white p-10 text-xl text-stone-700 shadow-lg focus-visible:border-primary focus-visible:border-opacity-50 focus-visible:outline focus-visible:outline-primary focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-50 focus-visible:ring-offset-primary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xl font-bold text-stone-900">
                      Sujet
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="saisir le sujet"
                        {...field}
                        className="focus-visible:ring-offset-opacity-50 rounded-3xl bg-white p-10 text-xl text-stone-700 shadow-lg focus-visible:border-primary focus-visible:border-opacity-50 focus-visible:outline focus-visible:outline-primary focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-50 focus-visible:ring-offset-primary"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xl font-bold text-stone-900">
                      Message
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        className="focus-visible:ring-offset-opacity-50 h-52 resize-none rounded-2xl bg-white p-4 text-xl text-stone-700 shadow-xl focus-visible:border-primary focus-visible:border-opacity-50 focus-visible:outline focus-visible:outline-primary focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-50 focus-visible:ring-offset-primary"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <ButtonGradient
                className="my-10 w-fit rounded-[90px] px-12 py-10 text-xl font-bold tracking-normal"
                title="Soumettre"
                type="submit"
              />
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};
