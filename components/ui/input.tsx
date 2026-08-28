"use client";

import type { InputHTMLAttributes } from "react";
import { useId } from "react";
import { cn } from "./cn";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export function Input({
  label,
  error,
  hint,
  className,
  id,
  ...props
}: InputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const describedBy = error
    ? `${inputId}-error`
    : hint
      ? `${inputId}-hint`
      : undefined;

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={inputId} className="text-[13px] font-semibold text-fg">
          {label}
        </label>
      )}

      <input
        id={inputId}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        className={cn(
          "h-10 w-full rounded-xl border bg-card px-3.5 text-sm text-fg",
          "placeholder:text-fg-faint",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aurora-500",
          "disabled:cursor-not-allowed disabled:opacity-50",
          error ? "border-red-500" : "border-line",
          className,
        )}
        {...props}
      />

      {error ? (
        <p id={`${inputId}-error`} className="text-[12px] text-red-500">
          {error}
        </p>
      ) : hint ? (
        <p id={`${inputId}-hint`} className="text-[12px] text-fg-subtle">
          {hint}
        </p>
      ) : null}
    </div>
  );
}
