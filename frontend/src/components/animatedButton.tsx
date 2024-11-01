import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@src/lib/utils";
interface AnimatedButtonProps {
  label: string;
  href: string;
  className?: string;
  classNameLabel?: string;
  bg?: string;
}
export const AnimatedButton = ({
  href,
  label,
  className,
  classNameLabel,
  bg,
}: AnimatedButtonProps) => {
  const [x, setX] = useState(0);
  const [state, setState] = useState("right-0 w-0");
  useEffect(() => {
    if (x === 1) {
      setState("left-0 w-full");
    } else if (x === 2) {
      setState("right-0 w-0");
    }
  }, [x]);
  return (
    <Link to={href}>
      <motion.button
        onHoverStart={() => setX(1)}
        onHoverEnd={() => setX(2)}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "relative z-10 mt-4 overflow-hidden rounded-xl border-2 bg-transparent px-6 py-4",
          className,
        )}
      >
        <span
          className={cn(
            "absolute top-0 -z-10 h-full bg-primary/70 transition-all duration-1000",
            state,
            bg,
          )}
        ></span>
        <span
          className={cn(
            "z-10 text-2xl font-semibold uppercase text-white transition-colors",
            classNameLabel,
          )}
        >
          {label}
        </span>
      </motion.button>
    </Link>
  );
};
