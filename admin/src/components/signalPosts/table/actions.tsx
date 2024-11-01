import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@components/ui/alert-dialog";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Row } from "@tanstack/react-table";
import { Signal } from "@src/types";
import { EyeOpenIcon, TrashIcon } from "@radix-ui/react-icons";
import { Button } from "@src/components/ui/button";

const navigate = (url: string) => {
  window.open(url, "_blank");
};
export const Actions = ({ data }: { data: Row<Signal> }) => {
  const [open, setOpen] = useState(false);
  const url = import.meta.env.VITE_APP_URL + `/signal/${data.original._id}`;
  const handleDelete = async () => {
    try {
      const url = import.meta.env.VITE_API_URL + "/signal/" + data.original._id;
      await axios.delete(url).then(() => {
        setOpen(false);
        toast.success("Signal deleted successfully");
      });
    } catch (error) {
      toast.error("An error occured");
      console.error(error);
    }
  };
  return (
    <div className="flex space-x-2">
      <EyeOpenIcon
        className="size-5 text-slate-400 cursor-pointer"
        onClick={() => navigate(url)}
      />
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger asChild>
          <TrashIcon className="size-5 text-slate-400 cursor-pointer" />
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              selected content and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button
                className="bg-red-600/80 text-xs hover:bg-red-400"
                onClick={() => handleDelete()}
              >
                <TrashIcon className="size-6" />
                Delete
              </Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
