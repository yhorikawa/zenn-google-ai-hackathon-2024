"use client";

import { Button } from "@/components/base-ui/Button/";

type LoadMoreButtonProps = {
  onClick: () => void;
  disabled: boolean;
};

export const LoadMoreButton = ({
  onClick,
  // @ts-ignore
  disabled = false, // TODO: 実装する
}: LoadMoreButtonProps) => {
  return <Button onClick={onClick}>もっと見る</Button>;
};
