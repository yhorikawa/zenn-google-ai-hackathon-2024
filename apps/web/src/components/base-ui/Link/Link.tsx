import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import type { PropsWithChildren } from "react";

interface LinkProps extends NextLinkProps {
  className?: string;
}

export const Link = ({
  children,
  className,
  ...props
}: PropsWithChildren<LinkProps>) => {
  return (
    <NextLink {...props} className={className}>
      {children}
    </NextLink>
  );
};
