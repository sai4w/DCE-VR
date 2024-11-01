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
import { Button } from "@components/ui/button";
import { register_2_Schema } from "@src/schemas";
import { gender, gouvernorats, registerType } from "@src/types";
import { CalendarIcon } from "@radix-ui/react-icons";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@src/components/ui/popover";
import { cn } from "@src/lib/utils";
import { format } from "date-fns";
import { RadioGroup, RadioGroupItem } from "@src/components/ui/radio-group";
import { CustomCalendar } from "@src/components/customCalendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@src/components/ui/select";

interface RegisterFormProps {
  setFormId: (id: number) => void;
  formData: registerType;
  setFormData: (data: registerType) => void;
}

export const RegisterForm_2 = ({
  setFormId,
  formData,
  setFormData,
}: RegisterFormProps) => {
  const form = useForm<z.infer<typeof register_2_Schema>>({
    resolver: zodResolver(register_2_Schema),
    defaultValues: {
      gender: undefined,
      phone: "",
      birth: undefined,
      region: undefined,
    },
  });
  const onSubmit = async (data: z.infer<typeof register_2_Schema>) => {
    setFormData({ ...formData, register_2: data });
    setFormId(2);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <div className="flex justify-between">
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-stone-700 font-medium text-sm capitalize">
                  gender
                </FormLabel>
                <FormControl>
                  <RadioGroup onValueChange={field.onChange} className="flex">
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem
                          value={gender.M}
                          className="bg-white border border-stone-300 size-8"
                        />
                      </FormControl>
                      <FormLabel className="font-normal">M</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem
                          value={gender.F}
                          className="bg-white border border-stone-300 size-8"
                        />
                      </FormControl>
                      <FormLabel className="font-normal">F</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-stone-700 font-medium text-sm capitalize">
                  telephone
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Doe"
                    {...field}
                    className="p-6 rounded-3xl focus:outline-primary focus:border-primary appearance-none"
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
        <FormField
          control={form.control}
          name="birth"
          render={({ field }) => (
            <FormItem className="w-full flex flex-col">
              <FormLabel>Date of birth</FormLabel>
              <Popover>
                <PopoverTrigger asChild className="w-full">
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "p-6 rounded-3xl bg-white focus:outline-primary focus:border-primary hover:bg-white",
                        !field.value && "text-muted-foreground",
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span className="font-normal">
                          selectionner votre date de naissance
                        </span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent
                  className="w-max p-0 mx-auto justify-start flex"
                  align="start"
                >
                  <CustomCalendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    className="p-4 flex justify-center self-center items-center "
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
        <FormField
          control={form.control}
          name="region"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-stone-700 font-medium text-sm capitalize">
                region
              </FormLabel>
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger
                    className="p-6 bg-white rounded-3xl focus:ring-primary"
                    value="choisir"
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
        <Button
          type="submit"
          className="w-full py-8 text-2xl rounded-3xl bg-gradient-to-r from-[#1DA684] to-[#BEDC7C] hover:from-[#BEDC7C] hover:to-[#1DA684] duration-1000 transition-all"
        >
          suivant
        </Button>
      </form>
    </Form>
  );
};
