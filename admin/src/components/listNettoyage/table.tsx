import { DataTable } from "./table/data-table";
import { columns } from "./table/columns";
import { Cleaning, Nettoyage, Signal } from "@src/types";
import { useEffect, useState } from "react";
interface TableProps {
  signal: Signal;
}

export const Table = ({ signal }: TableProps) => {
  const [nettoyages, setNettoyages] = useState<Nettoyage[]>([]);

  useEffect(() => {
    signal.cleaning?.map((cleaning: Cleaning) => {
      const nettoyage: Nettoyage = {
        cleaning,
        user: signal.user,
        id_signal: signal._id,
      };
      setNettoyages((prev) => [...prev, nettoyage]);
    });
  }, [signal]);

  return (
    <div className="w-full shadow bg-white rounded my-8">
      <DataTable columns={columns} data={nettoyages} />
    </div>
  );
};
