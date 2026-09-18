import type { ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "secondary";

const BASE =
  "t-body-s inline-flex h-11 items-center justify-center gap-2 rounded-md px-5 font-medium transition-colors duration-150 ease-nura disabled:cursor-not-allowed disabled:opacity-60";

const VARIANTS: Record<Variant, string> = {
  primary: "bg-green text-surface hover:bg-green-700 disabled:hover:bg-green",
  secondary:
    "border border-line-strong bg-surface text-ink hover:bg-sunken disabled:hover:bg-surface",
};

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: Variant;
  /** Disables the button and announces that something is in progress. */
  loading?: boolean;
  loadingLabel?: string;
};

export function Button({
  variant = "primary",
  loading = false,
  loadingLabel = "One moment…",
  disabled,
  className = "",
  type = "button",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={`${BASE} ${VARIANTS[variant]} ${className}`}
      {...props}
    >
      {loading ? loadingLabel : children}
    </button>
  );
}
