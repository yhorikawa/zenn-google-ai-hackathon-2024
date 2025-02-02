"use client";

import { Button } from "@/components/base-ui/Button/";

export const LoadMoreButton = () => {
  const clickHandler = () => {
    console.log("click handler");
  };

  return <Button onClick={clickHandler}>もっと見る</Button>;
};
