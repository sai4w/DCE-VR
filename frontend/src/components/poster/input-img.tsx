import React from "react";
import Camera from "@src/assets/icons/camera.tsx";
import { cn } from "@src/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputImg = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, id, onChange, disabled, ...props }, ref) => {
    const [img, setImg] = React.useState<File | null>(null);
    return (
      <div className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-2xl bg-white">
        <label
          htmlFor={id}
          aria-disabled={disabled}
          className="group flex h-full w-full cursor-pointer items-center justify-center overflow-hidden rounded-2xl border-2 border-stone-200 transition-colors duration-300 ease-in-out hover:border-stone-500 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
        >
          <div className="flex h-full w-full items-center justify-center">
            {img ? (
              <img
                src={URL.createObjectURL(img)}
                alt="Preview"
                className="h-full w-full rounded-lg object-cover"
              />
            ) : (
              <Camera className="size-24 text-stone-200 transition-colors duration-300 ease-in-out group-hover:text-stone-500" />
            )}
          </div>
          <input
            type={type}
            id={id}
            className={cn("hidden", className)}
            ref={ref}
            onChange={(e) => {
              e.persist();
              if (onChange) {
                onChange(e);
                setImg(e.target.files![0]);
              }
            }}
            disabled={disabled}
            {...props}
          />
        </label>
      </div>
    );
  },
);

InputImg.displayName = "InputImg";
export { InputImg };
