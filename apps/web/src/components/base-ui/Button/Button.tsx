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
      className="px-6 py-3 border border-black/80 hover:bg-black/5 transition-colors"
    >
      <div className="flex items-center gap-2 text-black/80">
        <span>↓</span>
        {children}
      </div>
    </button>
  );
};
