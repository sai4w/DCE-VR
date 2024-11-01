import leafs from "@src/assets/images/leafs.png";
import trashprimary from "@src/assets/icons/rank/trashPrimary.svg";
import { BreadcrumbUI } from "@src/components/BreadcrumbUI";
import { useNavigate } from "react-router-dom";
import { avatars } from "@src/assets/avatar/avatar";
import first from "@src/assets/icons/rank/first.svg";
import second from "@src/assets/icons/rank/second.svg";
import third from "@src/assets/icons/rank/third.svg";
import badge1 from "@src/assets/icons/rank/badge1.svg";
import badge2 from "@src/assets/icons/rank/badge2.svg";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@src/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@components/ui/table";
import { gouvernorats } from "@src/types";
const RankingPage = () => {
  const navigate = useNavigate();
  const path = [
    { name: "Accueil", path: "/" },
    { name: "Classement", path: "" },
  ];
  return (
    <div
      className="flex h-screen w-screen gap-24 bg-cover bg-center bg-no-repeat p-12"
      style={{ backgroundImage: `url(${leafs})` }}
    >
      <div className="flex size-full flex-col gap-4">
        <div className="flex items-center gap-2">
          <img src={trashprimary} alt="trash" className="size-16" />
          <p className="font-integral text-3xl uppercase text-primary">
            classement DE Signal des déchets
          </p>
        </div>
        <BreadcrumbUI path={path} />
        <button
          className="w-fit rounded-xl border-[3px] border-primary p-2 font-bold text-primary"
          onClick={() => navigate("/")}
        >{`< Retour à l'accueil`}</button>
        <div className="flex h-full flex-col items-center justify-center gap-4">
          <div className="w-2/3">
            <p className="text-center font-integral text-4xl uppercase">
              <span className="text-primary">Top 3</span> Éco-Champions du{" "}
              <span className="text-primary">Janvier 2024</span>
            </p>
          </div>
          <div className="flex size-full items-end justify-center gap-12">
            <div className="flex h-[90%] flex-col gap-4">
              <div className="relative h-fit w-fit">
                <img
                  src={avatars[2]}
                  alt="first"
                  className="size-40 rounded-full border-4 border-stone-300 object-cover"
                />

                <label className="absolute bottom-1 left-1/2 -translate-x-1/2 transform text-nowrap rounded-lg bg-primary px-2 py-1 text-sm font-bold text-white shadow-lg">
                  Farid Selmi
                </label>
              </div>
              <div className="bg-gradient flex h-full w-full flex-col items-center gap-10 rounded-lg py-2">
                <img src={second} alt="first" />
                <p className="flex flex-col text-center text-6xl font-bold text-white">
                  62
                  <span className="text-xl">Points</span>
                </p>
              </div>
            </div>
            <div className="flex h-full flex-col gap-4">
              <div className="relative h-fit w-fit">
                <img
                  src={avatars[0]}
                  alt="first"
                  className="size-40 rounded-full border-4 border-stone-300 object-cover"
                />

                <label className="absolute bottom-1 left-1/2 -translate-x-1/2 transform text-nowrap rounded-lg bg-primary px-2 py-1 text-sm font-bold text-white shadow-lg">
                  Khalil Horri
                </label>
              </div>
              <div className="bg-gradient flex h-full w-full flex-col items-center gap-10 rounded-lg py-2">
                <img src={first} alt="first" />
                <p className="flex flex-col text-center text-6xl font-bold text-white">
                  74
                  <span className="text-xl">Points</span>
                </p>
              </div>
            </div>
            <div className="flex h-[81%] flex-col gap-4">
              <div className="relative h-fit w-fit">
                <img
                  src={avatars[5]}
                  alt="first"
                  className="size-40 rounded-full border-4 border-stone-300 object-cover"
                />
                <label className="absolute bottom-1 left-1/2 -translate-x-1/2 transform text-nowrap rounded-lg bg-primary px-2 py-1 text-sm font-bold text-white shadow-lg">
                  Emna Ben Aissa
                </label>
              </div>
              <div className="bg-gradient flex h-full w-full flex-col items-center gap-10 rounded-lg py-2">
                <img src={third} alt="first" />
                <p className="flex flex-col text-center text-6xl font-bold text-white">
                  61
                  <span className="text-xl">Points</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex size-full flex-col items-end gap-4">
        <div className="flex justify-end gap-4">
          <div className="flex justify-end gap-2 border bg-white px-2 shadow-xl">
            <div className="h-fit w-fit">
              <div className="flex flex-col gap-2">
                <img src={badge1} alt="badge1" className="size-16" />
                <p className="flex flex-col text-center font-bold leading-3 text-yellow-400">
                  Éco
                  <br />-<br />
                  Radar
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between py-4 pl-4">
              <p className="text-stone-700">Ahmed Cherif</p>
              <p className="flex items-center gap-2 text-5xl font-bold">
                147
                <span className="text-base font-semibold">Signalements</span>
              </p>
              <p className="text-sm">
                <span className="text-yellow-400">41.6%</span> de total de
                signalement !
              </p>
            </div>
          </div>
          <div className="flex justify-end gap-2 border bg-white px-2 shadow-xl">
            <div className="h-fit w-fit">
              <div className="flex flex-col gap-2">
                <img src={badge2} alt="badge2" className="size-16" />
                <p className="flex flex-col text-center font-bold leading-3 text-yellow-400">
                  Éco
                  <br />-<br />
                  Heros
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between py-4 pl-4">
              <p className="text-stone-700">Amira Ben Aissa</p>
              <p className="flex items-center gap-2 text-5xl font-bold">
                60
                <span className="text-base font-semibold">
                  Escapes Nettoyés
                </span>
              </p>
              <p className="text-sm">
                <span className="text-yellow-400">20.4%</span> de total de
                Nettoyages !
              </p>
            </div>
          </div>
        </div>
        <Select>
          <SelectTrigger className="w-1/3 rounded-none bg-white shadow">
            <SelectValue placeholder="Tous Les Régions" />
          </SelectTrigger>
          <SelectContent>
            {Object.values(gouvernorats).map((region) => (
              <SelectItem key={region} value={region}>
                {region}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Classement</TableHead>
              <TableHead></TableHead>
              <TableHead>Éco-Champion</TableHead>
              <TableHead className="w-[75px] text-center">Points</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium text-primary">15</TableCell>
              <TableCell>
                <img
                  src={avatars[5]}
                  alt="first"
                  className="size-14 rounded-full border border-primary object-cover"
                />
              </TableCell>
              <TableCell className="text-primary">Moi</TableCell>
              <TableCell className="w-[75px] text-center text-xl font-bold text-primary">
                20
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">1</TableCell>
              <TableCell>
                <img
                  src={avatars[0]}
                  alt="first"
                  className="size-14 rounded-full border object-cover"
                />
              </TableCell>
              <TableCell>Farid Selmi</TableCell>
              <TableCell className="w-[75px] text-center text-xl font-bold">
                74
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">2</TableCell>
              <TableCell>
                <img
                  src={avatars[3]}
                  alt="first"
                  className="size-14 rounded-full border object-cover"
                />
              </TableCell>
              <TableCell>Khalil Horri</TableCell>
              <TableCell className="w-[75px] text-center text-xl font-bold">
                62
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">3</TableCell>
              <TableCell>
                <img
                  src={avatars[5]}
                  alt="first"
                  className="size-14 rounded-full border object-cover"
                />
              </TableCell>
              <TableCell>Emna Ben Aissa</TableCell>
              <TableCell className="w-[75px] text-center text-xl font-bold">
                61
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">4</TableCell>
              <TableCell>
                <img
                  src={avatars[4]}
                  alt="first"
                  className="size-14 rounded-full border object-cover"
                />
              </TableCell>
              <TableCell>Khawla Hsan</TableCell>
              <TableCell className="w-[75px] text-center text-xl font-bold">
                58
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">5</TableCell>
              <TableCell>
                <img
                  src={avatars[1]}
                  alt="first"
                  className="size-14 rounded-full border object-cover"
                />
              </TableCell>
              <TableCell>Monsef Ben Rhouma</TableCell>
              <TableCell className="w-[75px] text-center text-xl font-bold">
                44
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">6</TableCell>
              <TableCell>
                <img
                  src={avatars[6]}
                  alt="first"
                  className="size-14 rounded-full border object-cover"
                />
              </TableCell>
              <TableCell>Ines Jouini</TableCell>
              <TableCell className="w-[75px] text-center text-xl font-bold">
                37
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default RankingPage;
