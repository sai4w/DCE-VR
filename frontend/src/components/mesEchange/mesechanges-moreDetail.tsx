import { formatDate } from "@src/lib/formatDate";
import { Post } from "@src/types";

type Props = {
  rent?: Post;
};

export const MesEchangesMoreDetail = ({ rent }: Props) => {
  if (!rent || !rent.reservation[0])
    return (
      <div className="flex min-h-[calc(100vh-100px)] w-5/12 flex-none flex-col gap-4 rounded-lg bg-white p-10" />
    );
  return (
    <div className="flex h-full w-5/12 flex-none flex-col gap-4 rounded-lg bg-white p-10">
      <div className="flex items-center justify-between">
        <p className="mb-2 self-start text-xl font-bold">
          Détails de la location
        </p>
      </div>
      <div className="flex h-fit items-end gap-x-2">
        <img
          src={rent.images[0]}
          alt={rent.title}
          className="h-full w-2/5 self-center rounded-lg object-scale-down object-center duration-150"
        />
        <div className="flex h-auto w-3/5 flex-col justify-center gap-y-4">
          <p className="h-3/5 w-full overflow-hidden text-ellipsis text-3xl font-bold">
            {rent.title}
          </p>
          <p className="text-slate-400/80">
            <span className="font-medium text-slate-600">demande par:</span>{" "}
            {rent.id_owner.firstname} {rent.id_owner.lastname}
          </p>
          <p className="font-medium text-slate-600">{rent.category}</p>
        </div>
      </div>
      <div className="flex h-fit flex-col justify-between gap-y-6">
        <p className="flex items-center gap-3">
          <div className="size-1 scale-110 rounded-full bg-primary p-1 ring-4 ring-primary/20" />
          <span className="text-lg font-semibold">Ramassage</span>
        </p>
        <div className="flex h-full items-center gap-x-4">
          <div className="flex h-full flex-col gap-2">
            <p className="text-xl font-bold text-slate-800">Location</p>
            <p className="font-medium text-slate-400">{rent.location}</p>
          </div>
          <div className="h-12 w-0.5 bg-slate-200 " />
          <div className="flex h-full flex-col gap-y-2">
            <p className="text-xl font-bold text-slate-800">Date de début</p>
            <p className="font-medium text-slate-400">
              {formatDate(new Date(rent.reservation[0].date_deb))}
            </p>
          </div>
        </div>
      </div>
      <div className="flex h-fit flex-col justify-between gap-y-6">
        <p className="flex items-center gap-3">
          <div className="size-1 scale-110 rounded-full bg-primary p-1 ring-4 ring-primary/20" />
          <span className="text-lg font-semibold">Retour</span>
        </p>
        <div className="flex h-full items-center gap-x-4">
          <div className="flex h-full flex-col gap-2">
            <p className="text-xl font-bold text-slate-800">Location</p>
            <p className="font-medium text-slate-400">{rent.location}</p>
          </div>
          <div className="h-12 w-0.5 bg-slate-200 " />
          <div className="flex h-full flex-col gap-y-2">
            <p className="text-xl font-bold text-slate-800">Date de début</p>
            <p className="font-medium text-slate-400">
              {formatDate(new Date(rent.reservation[0].date_fin))}
            </p>
          </div>
        </div>
      </div>
      <div className="my-8 h-0.5 bg-slate-200" />
      <div className="flex h-fit items-center justify-between gap-x-4">
        <div className="flex h-fit flex-col justify-between gap-x-4">
          <p className="text-xl font-bold text-slate-800">
            Prix total de la location
          </p>
          <p className="font-medium text-slate-400">
            Prix total + la réduction de la location
          </p>
        </div>
        <div>
          <p className="text-4xl font-bold">{rent.reservation[0].total} DT</p>
        </div>
      </div>
    </div>
  );
};
