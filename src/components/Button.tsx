import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function Button({
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "rounded-xl px-8 py-3 text-lg font-semibold transition duration-200",
        variant === "primary" &&
          "bg-gradient-to-r from-amber-400 to-amber-500 text-black shadow-lg shadow-amber-500/30 hover:from-amber-300 hover:to-amber-400",
        variant === "secondary" &&
          "border border-white/20 bg-white/5 text-white backdrop-blur-sm hover:bg-white/10",
        className,
      )}
    >
      {children}
    </button>
  );
}
