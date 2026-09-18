import { useId } from "react";
import type { ComponentPropsWithoutRef } from "react";

type InputProps = Omit<ComponentPropsWithoutRef<"input">, "id"> & {
  /** Always rendered as a real <label>. A placeholder is never a substitute. */
  label: string;
  /** Optional line under the field, for hints such as a minimum length. */
  hint?: string;
};

export function Input({ label, hint, className = "", ...props }: InputProps) {
  const id = useId();
  const hintId = hint ? `${id}-hint` : undefined;

  return (
    <div className={className}>
      <label htmlFor={id} className="t-body-s block font-medium text-ink">
        {label}
      </label>
      <input
        id={id}
        aria-describedby={hintId}
        className="t-body mt-2 block min-h-11 w-full rounded-sm border border-line-strong bg-sunken px-field py-2 text-ink transition-colors duration-150 ease-nura placeholder:text-ink-3 focus:border-green"
        {...props}
      />
      {hint ? (
        <p id={hintId} className="t-caption mt-2 text-ink-3">
          {hint}
        </p>
      ) : null}
    </div>
  );
}
