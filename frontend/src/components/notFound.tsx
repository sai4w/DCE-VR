import { AnimatedButton } from "./animatedButton";

export const NotFound = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-[url(./assets/images/404.png)] ">
      <p className="font-integral text-[300px] font-bold leading-tight text-stone-100">
        404
      </p>
      <p className="font-integral text-8xl font-bold uppercase text-stone-100">
        Page introuvable
      </p>
      <AnimatedButton
        href="/"
        label="Retourner À L'Accueil"
        className="my-20 p-6"
        classNameLabel="text-3xl"
        bg="bg-primary/40"
      />
    </div>
  );
};
