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
import { Slider } from "./ecomap-slider";
import { Button } from "../ui/button";

const EcoMapFilter = () => {
  const [prix, setPrix] = useState<number[]>([10000]);

  return (
    <div className="h-full w-1/3 flex-col gap-4 space-y-4 border-2 border-stone-300 bg-white p-6">
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
            <CheckItem label="Maison d'hôte" />
            <CheckItem label="Gîte rural" />
            <CheckItem label="Auberge" />
            <CheckItem label="Sanctuaire de faune" />
            <CheckItem label="Hébergement insolite" />
            <CheckItem label="ferme" />
            <CheckItem label="Résidence" />
            <CheckItem label="Centre" />
            <CheckItem label="Boutique" />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Separator />
      <Accordion type="single" collapsible>
        <AccordionItem value="item-2">
          <AccordionTrigger>Distance</AccordionTrigger>
          <AccordionContent>
            <Slider
              max={20000}
              step={10}
              value={prix}
              onValueChange={(e) => setPrix([e[0]])}
            />
            <div className="flex w-full justify-between">
              <label>{prix}KM</label>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Separator />
      <Button className="w-full bg-primary py-6 text-lg font-medium text-white hover:bg-primary hover:brightness-90">
        Appliquer filter
      </Button>
    </div>
  );
};
export { EcoMapFilter };
