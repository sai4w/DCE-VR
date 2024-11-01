import { useState } from "react";
import preference from "@src/assets/icons/preference.svg";
import Search from "@src/assets/icons/Search";
import { Separator } from "../ui/separator";
import { CheckItem } from "../checkItem";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Slider } from "../ui/slider";
import { Calendar } from "../ui/calendar";
import { Button } from "../ui/button";
import { DateRange } from "react-day-picker";

const PostsFilter = () => {
  const [prix, setPrix] = useState<number[]>([250, 750]);
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
  });
  return (
    <div className="h-full w-full flex-col gap-4 space-y-4 border-2 border-stone-300 bg-white p-6">
      <div className="flex h-full items-center justify-between">
        <h1 className="text-2xl font-bold">Filter</h1>
        <img src={preference} alt="preference" className="size-7" />
      </div>
      <div className="relative flex">
        <input
          type="text"
          placeholder="Rechercher"
          className="w-full rounded-lg border-2 border-stone-300 px-4 py-2 shadow placeholder:text-xl placeholder:font-semibold placeholder:text-stone-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <Search className="absolute right-5 top-2 h-6 w-6 text-stone-400" />
      </div>
      <Separator />
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Catégorie</AccordionTrigger>
          <AccordionContent className="space-y-3">
            <CheckItem label="Electronique" />
            <CheckItem label="Récyclé" />
            <CheckItem label="Mécanique" />
            <CheckItem label="Livres" />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Separator />
      <Accordion type="single" collapsible>
        <AccordionItem value="item-2">
          <AccordionTrigger>Prix par jour</AccordionTrigger>
          <AccordionContent>
            <Slider
              defaultValue={[250, 750]}
              step={10}
              min={10}
              max={1000}
              value={prix}
              onValueChange={(e) =>
                setPrix([e[0] < 10 ? 10 : e[0], e[1] > 1000 ? 1000 : e[1]])
              }
            />
            <div className="flex w-full justify-between">
              <label>{prix[0]}DT</label>
              <label>{prix[1]}DT</label>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Separator />
      <Accordion type="single" collapsible>
        <AccordionItem value="item-3">
          <AccordionTrigger>Date</AccordionTrigger>
          <AccordionContent>
            <Calendar
              mode="range"
              selected={date}
              onSelect={setDate}
              classNames={{
                root: "w-full flex items-start justify-center h-fit",
              }}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Button className="w-full bg-primary py-6 text-lg font-medium text-white hover:bg-primary hover:brightness-90">
        Appliquer filter
      </Button>
    </div>
  );
};
export { PostsFilter };
