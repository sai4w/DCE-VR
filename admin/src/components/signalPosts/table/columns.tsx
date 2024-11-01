import { formatDate } from "@src/libs/formatDate";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@components/ui/button";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { Checkbox } from "@components/ui/checkbox";
import { Signal } from "@src/types";
import { Actions } from "./actions";

export const columns: ColumnDef<Signal>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className=""
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: "Id",
    cell: ({ row }) => {
      return <span className="text-[#139C71]">{row.original._id}</span>;
    },
  },
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="px-0 w-full justify-start"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title
          <CaretSortIcon
            className={`ml-2 h-4 w-4 ${
              column.getIsSorted() !== false ? "text-[#139C71]" : ""
            } `}
          />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          <img
            src={row.original.images[0]}
            className="object-cover object-center size-8 rounded-full border border-stone-300"
          />
          <p className="truncate">{row.original.title}</p>
        </div>
      );
    },
  },
  {
    accessorFn: (row) => `${row.user.firstname} ${row.user.lastname}`,
    id: "signalant",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="px-0 w-full justify-start"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Signalant
          <CaretSortIcon
            className={`ml-2 h-4 w-4 ${
              column.getIsSorted() !== false ? "text-[#139C71]" : ""
            } `}
          />
        </Button>
      );
    },
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="px-0 w-full justify-start"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date
          <CaretSortIcon
            className={`ml-2 h-4 w-4 ${
              column.getIsSorted() !== false ? "text-[#139C71]" : ""
            } `}
          />
        </Button>
      );
    },
    cell: ({ row }) => {
      const date = formatDate(new Date(row.original.date));
      return date;
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="px-0 w-full justify-start"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <CaretSortIcon
            className={`ml-2 h-4 w-4 ${
              column.getIsSorted() !== false ? "text-[#139C71]" : ""
            } `}
          />
        </Button>
      );
    },
    cell: ({ row }) => {
      const status = row.original.status;
      return (
        <span
          className={`px-2 py-0.5 rounded font-semibold text-xs ${
            status === "cleaned"
              ? "bg-emerald-50 border border-emerald-600 text-emerald-600"
              : "bg-red-50 border border-red-600 text-red-600"
          }`}
        >
          {status}
        </span>
      );
    },
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      return <Actions data={row} />;
    },
    enableSorting: false,
    enableHiding: false,
  },
];
