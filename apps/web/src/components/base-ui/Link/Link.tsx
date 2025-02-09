import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import type React from "react";

interface LinkProps extends NextLinkProps {
  children: React.ReactNode;
  className?: string;
}

export const Link = ({ children, className, ...props }: LinkProps) => {
  return (
    <NextLink {...props} className={className}>
      {children}
    </NextLink>
  );
};
