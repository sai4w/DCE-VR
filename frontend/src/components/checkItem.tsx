import { Checkbox } from "./ui/checkbox";

export const CheckItem = ({ label }: { label: string }) => {
  return (
    <div className="flex items-center justify-between">
      <label
        htmlFor={label}
        className="select-none text-lg font-medium leading-none text-stone-500 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
      <Checkbox className="size-5 rounded-[4px] " id={label} />
    </div>
  );
};
