"use client";

import * as React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { DayPicker } from "react-day-picker";
import { fr } from "date-fns/locale";
import { cn } from "@src/lib/utils";
import { buttonVariants } from "@components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function CustomCalendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      captionLayout="dropdown-buttons"
      fromYear={new Date().getFullYear() - 100}
      toYear={new Date().getFullYear()}
      className={cn("", className)}
      classNames={{
        root: "w-full flex justify-center border border-primary rounded-md overflow-hidden",
        vhidden: "sr-only",
        months:
          "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 items-center justify-center",
        month: "space-y-4",
        caption: "flex justify-center p-2 relative items-center",
        caption_label: "hidden",
        caption_dropdowns: "flex justify-evenly space-x-2 items-center",
        dropdown:
          "w-full border border-primary rounded-md overflow-auto focus-visible:outline-none",
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        ),

        table: "w-full border-collapse border-spacing-0",
        head_row: "flex",
        head_cell: "text-slate-500 rounded-md w-10 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: cn(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-slate-100 [&:has([aria-selected].day-outside)]:bg-slate-100/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-md",
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-10 w-10 p-0 font-normal aria-selected:opacity-100",
        ),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-slate-50 focus:bg-primary focus:text-slate-50",
        day_today: "text-primary border-2 border-primary",
        day_outside:
          "day-outside text-slate-500 opacity-50  aria-selected:bg-slate-100/50 aria-selected:text-slate-500 aria-selected:opacity-30",
        day_disabled: "text-slate-500 opacity-50 ",
        day_range_middle:
          "aria-selected:bg-slate-100 aria-selected:text-slate-900",
        day_hidden: "invisible",
        ...classNames,
      }}
      locale={fr}
      components={{
        IconLeft: () => <ChevronLeftIcon className="h-6 w-6" />,
        IconRight: () => <ChevronRightIcon className="h-6 w-6" />,
      }}
      {...props}
    />
  );
}
CustomCalendar.displayName = "Calendar";

export { CustomCalendar };
