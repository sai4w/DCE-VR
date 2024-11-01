import { Link } from "react-router-dom";
import { Button, buttonVariants } from "./button";
import { cn } from "../../lib/utils";
import { VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

export interface ButtonGradientProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  href?: string;
  title: string;
  className?: string;
}
const ButtonGradient = forwardRef<HTMLButtonElement, ButtonGradientProps>(
  ({ className, href, title, ...props }, ref) => {
    return (
      <Link to={href || ""}>
        <Button
          className={cn(
            "bg-gradient hover:shadow-neon w-fit select-none tracking-widest duration-500",
            className,
          )}
          ref={ref}
          {...props}
        >
          {title}
        </Button>
      </Link>
    );
  },
);
Button.displayName = "Button";

export { ButtonGradient };
