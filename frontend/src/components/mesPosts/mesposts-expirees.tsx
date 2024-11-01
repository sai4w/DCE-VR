import { Post } from "@src/types";
import { Button } from "../ui/button";
import { formatDate } from "@src/lib/formatDate";

interface MesPostsExpireesProps {
  post: Post;
  isSelected: number;
  setSelected: (index: number) => void;
}

export const MesPostsExpirees = ({
  post,
  isSelected,
  setSelected,
}: MesPostsExpireesProps) => {
  if (!post) return null;
  return post.reservation.map(
    (reserv, index) =>
      (reserv.disponibility === "expiree" ||
        reserv.date_deb < new Date() ||
        reserv.disponibility === "refusé") && (
        <div
          key={index}
          className={`flex h-full items-center justify-between p-4 ${isSelected === index ? "border-l-2 border-primary" : "border-l-2 border-transparent"}`}
        >
          <div className="flex flex-col gap-2">
            <p className="text-lg font-bold text-slate-800">Date de début</p>
            <p className="font-medium text-slate-400">
              {reserv.date_deb ? formatDate(new Date(reserv.date_deb)) : "N/A"}
            </p>
          </div>
          <div className="h-12 w-0.5 bg-slate-200" />
          <div className="flex flex-col gap-y-2">
            <p className="text-lg font-bold text-slate-800">Date de Fin</p>
            <p className="font-medium text-slate-400">
              {reserv.date_fin ? formatDate(new Date(reserv.date_fin)) : "N/A"}
            </p>
          </div>
          <Button
            onClick={() => setSelected(index)}
            className="h-full w-fit rounded-xl border border-stone-300 bg-transparent px-5 py-2 text-lg font-light text-stone-400 hover:bg-stone-50 hover:text-stone-500"
          >
            Voir Plus &gt;&gt;
          </Button>
        </div>
      ),
  );
};
