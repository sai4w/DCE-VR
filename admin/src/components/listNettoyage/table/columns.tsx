import { CaretSortIcon } from "@radix-ui/react-icons";
import { Button } from "@src/components/ui/button";
import { formatDate } from "@src/libs/formatDate";
import { Nettoyage } from "@src/types";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Nettoyage>[] = [
  {
    id: "id",
    accessorKey: "cleaning._id",
    header: "Id",
    cell: ({ row }) => (
      <span className="text-[#139C71]">{row.original.cleaning._id}</span>
    ),
  },
  {
    id: "nettoyeur",
    accessorFn: (row) => `${row.user.firstname} ${row.user.lastname}`,
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="px-0 w-full justify-start"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nettoyeur
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
    accessorKey: "cleaning.description",
    header: "Description",
  },
  {
    accessorKey: "cleaning.status",
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
      return (
        <span
          className={`size-4 flex ml-4 rounded-full text-xs ${
            row.original.cleaning.status === "accepté"
              ? "bg-green-500 text-white"
              : row.original.cleaning.status === "refusé"
              ? "bg-red-500 text-white"
              : "bg-yellow-500 text-black"
          }`}
        />
      );
    },
  },
  {
    accessorKey: "cleaning.date",
    header: "Date",
    cell: ({ row }) => {
      const date = formatDate(new Date(row.original.cleaning.date));
      return date;
    },
  },
];
