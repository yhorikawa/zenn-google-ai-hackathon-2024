"use client";

import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
};

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="px-6 py-3 border rounded-sm border-outline-variant"
    >
      <div className="flex items-center gap-2 text-on-surface">
        <span>↓</span>
        {children}
      </div>
    </button>
  );
};
