import { DataTable } from "./table/data-table";
import { columns } from "./table/columns";
import { useNettoyages } from "@src/hooks/useNettoyages";

export const Table = () => {
  const { nettoyages } = useNettoyages();
  return (
    <div className="w-full shadow bg-white rounded my-8">
      <DataTable columns={columns} data={nettoyages} />
    </div>
  );
};
