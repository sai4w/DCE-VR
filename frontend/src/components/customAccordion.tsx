import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/ui/accordion";
interface CustomAccordionProps {
  items: {
    title: string;
    content: string;
  }[];
}
export const CustomAccordion = ({ items }: CustomAccordionProps) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          value={"item" + index}
          className="mb-6 last:mb-0"
        >
          <AccordionTrigger className="bg-[#F5F5F5] p-4 text-2xl font-medium tracking-tighter ring-stone-300 data-[state=closed]:border-2 data-[state=open]:border-2 data-[state=closed]:border-stone-300 data-[state=open]:border-primary data-[state=open]:bg-primary data-[state=open]:text-[#F5F5F5] [&[data-state=open]>svg]:text-[#F5F5F5]">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="border-2 border-primary bg-[#F5F5F5] p-4 text-base">
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
