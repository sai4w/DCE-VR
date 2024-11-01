import { avatars } from "@src/assets/avatar/avatar";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { ImgSelector } from "../imgSelector";
import { useState, useTransition } from "react";
import useUserStore from "@src/store/userStore";
import axios from "axios";
import { toast } from "sonner";
export const MesParametresAvatar = () => {
  const { user, setUser } = useUserStore();
  const [avatar, setAvatar] = useState<string>(user.avatar);
  const [open, setOpen] = useState(false);
  const [ispending, startTransition] = useTransition();
  const onSubmit = async () => {
    const data = { avatar: avatar };
    startTransition(() => {
      try {
        const url = `${import.meta.env.VITE_API_URL}/user/update/${user._id}`;
        axios.post(url, { data: data }).then((res) => setUser(res.data));
        toast.success("Avatar mis à jour avec succès");
      } catch (error) {
        console.error("Error updating avatar:", error);
        toast.error("Erreur lors de la mise à jour de l'avatar");
      } finally {
        setOpen(false);
      }
    });
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="rounded-xl bg-primary px-12 py-7 text-2xl font-light text-white hover:bg-primary hover:brightness-90">
          Choisir un avatar
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="py-10 text-5xl">
            Choisir un avatar
          </DialogTitle>
          <DialogDescription>
            <div className="grid grid-cols-4 gap-4 p-8">
              {avatars.map((ava, index) => (
                <ImgSelector
                  fieldValue={avatar}
                  setSelector={() => {
                    setAvatar(index.toString());
                  }}
                  key={index}
                  img={ava}
                  disabled={ispending}
                  i={index.toString()}
                />
              ))}
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex justify-end gap-4 border-t-2 bg-white p-6">
          <div className="flex items-center gap-4">
            <DialogClose>
              <Button
                disabled={ispending}
                className="w-full border-2 border-primary bg-white py-5 text-lg font-medium text-primary hover:bg-primary hover:text-white hover:brightness-90"
              >
                Annuler
              </Button>
            </DialogClose>

            <Button
              onClick={onSubmit}
              disabled={ispending}
              className="w-full border-2 border-primary bg-primary py-5 text-lg font-medium text-white hover:bg-primary hover:brightness-90"
            >
              Continue
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
