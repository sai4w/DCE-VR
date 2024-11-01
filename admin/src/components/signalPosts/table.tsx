import { DataTable } from "./table/data-table";
import { columns } from "./table/columns";
import { useSignals } from "../../hooks/useSignals";

export const Table = () => {
  const { signals } = useSignals();
  return (
    <div className="w-full shadow bg-white rounded my-8">
      <DataTable columns={columns} data={signals} />
    </div>
  );
};
