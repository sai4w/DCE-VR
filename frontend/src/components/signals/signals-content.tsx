import Search from "@src/assets/icons/Search";
import { BreadcrumbUI } from "../BreadcrumbUI";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { gouvernorats } from "@src/types";
import { SignalCard } from "./signals-card";
import { Fragment } from "react/jsx-runtime";
import { useSignals } from "@src/hooks/useSignals";

export const SignalsContent = () => {
  const { signals, loading } = useSignals();

  const path = [
    { path: "/", name: "Accueil" },
    { path: "/signal", name: "Eco Signal" },
  ];
  return (
    <div className="container my-8 flex w-full flex-1 flex-col justify-start gap-8 px-2">
      <BreadcrumbUI path={path} />
      <div className="flex flex-col gap-12">
        <div className="flex w-5/6 items-center gap-4">
          <div className="relative w-full">
            <Input
              placeholder="Rechercher un signal"
              className="shadow placeholder:font-semibold focus:outline focus:outline-stone-500"
            />
            <Search className="absolute right-4 top-1/2 size-5 -translate-y-1/2 transform text-stone-500" />
          </div>
          <Select>
            <SelectTrigger className="w-1/3 bg-white shadow">
              <SelectValue placeholder="Region" />
            </SelectTrigger>
            <SelectContent>
              {Object.values(gouvernorats).map((region) => (
                <SelectItem key={region} value={region}>
                  {region}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      {!loading ? (
        signals.map((signal, index) => (
          <Fragment key={index}>
            <SignalCard signal={signal} />
          </Fragment>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
