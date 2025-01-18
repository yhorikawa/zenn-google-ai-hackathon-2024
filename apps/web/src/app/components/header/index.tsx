"use client";

import { SITE_TITLE } from "@/constants/site";
import { Button, Navbar } from "flowbite-react";
import type { MouseEventHandler } from "react";
import { HiOutlineArrowRight } from "react-icons/hi2";

export function Header() {
  const onClickHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    console.log("Button clicked", e);
  };
  return (
    <Navbar fluid className="bg-slate-300">
      <div className="flex w-full flex-wrap items-center justify-between p-4 space-x-8">
        <Navbar.Brand href="/">
          <span className="ml-1 self-center whitespace-nowrap text-xl font-semibold">
            {SITE_TITLE}
          </span>
        </Navbar.Brand>
        <div className="order-2 items-center flex">
          <Button pill onClick={onClickHandler} className="bg-slate-200">
            <HiOutlineArrowRight className="h-6 w-6 stroke-slate-800" />
          </Button>
        </div>
      </div>
    </Navbar>
  );
}
