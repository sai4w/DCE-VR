import { cn } from "@src/lib/utils";

interface SeparatorProps {
  className?: string;
}
export const Separator = ({ className }: SeparatorProps) => {
  return <div className={cn("flex h-[1px] bg-stone-700/20 ", className)} />;
};
