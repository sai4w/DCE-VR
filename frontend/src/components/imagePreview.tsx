import { useState } from "react";
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "./ui/dialog";
import { CrossCircledIcon } from "@radix-ui/react-icons";

interface ImagePreviewProps {
  images: string[];
}
export const ImagePreview = ({ images }: ImagePreviewProps) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  return (
    <div className="flex h-[600px] w-1/2 gap-2">
      <div className="flex h-full w-1/6 flex-col justify-stretch gap-2">
        {images.map((image) => (
          <img
            key={image}
            src={image}
            alt="preview"
            className="h-24 flex-none cursor-pointer rounded border-2 border-stone-300 object-cover object-center hover:border-primary"
            onMouseOver={() => setSelectedImage(image)}
          />
        ))}
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <img
            src={selectedImage}
            alt="preview"
            className="flex h-full w-5/6 rounded border-2 border-stone-300 object-cover object-center hover:border-primary"
          />
        </DialogTrigger>
        <DialogContent className="m-auto max-h-[70vh] max-w-[70vw] p-0">
          <img
            src={selectedImage}
            alt="preview"
            className="h-full w-full rounded border-2 border-stone-300 object-cover object-center"
          />
          <DialogClose className="absolute -right-2 -top-2 rounded-full bg-white p-[-4px] text-black">
            <CrossCircledIcon className="size-6" />
          </DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  );
};
