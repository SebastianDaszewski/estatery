"use client";

import clsx from "clsx";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: ButtonVariant;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  variant = "primary",
  className,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "px-6 py-2.5 rounded-lg font-bold text-base text-center duration-200 flex items-center justify-center whitespace-nowrap focus:outline-none",
        {
          "bg-primary hover:bg-primary-hover border-2 focus:border-primary-focus text-white focus:outline-none active:bg-primary-pressed":
            variant === "primary",
          "bg-primary-disabled text-white": variant === "primary" && disabled,
          "bg-white border-2 border-divider text-black hover:border-primary focus:border-primary focus:text-primary focus:outline-none active:text-secondary-pressed active:border-secondary-pressed":
            variant === "secondary" && !disabled,
          "text-secondary-disabled border-divider border-2":
            variant === "secondary" && disabled,
        },
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
