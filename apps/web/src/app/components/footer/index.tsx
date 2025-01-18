"use client";

import { SITE_TITLE } from "@/constants/site";
import { Footer as FlowBiteFooter } from "flowbite-react";

export function Footer() {
  return (
    <FlowBiteFooter container className="bg-slate-300 rounded-none">
      <FlowBiteFooter.Copyright href="#" by={`${SITE_TITLE}™`} year={2025} />
      <FlowBiteFooter.LinkGroup>
        <FlowBiteFooter.Link href="#">About</FlowBiteFooter.Link>
        <FlowBiteFooter.Link href="#">Privacy Policy</FlowBiteFooter.Link>
        <FlowBiteFooter.Link href="#">Licensing</FlowBiteFooter.Link>
        <FlowBiteFooter.Link href="#">Contact</FlowBiteFooter.Link>
      </FlowBiteFooter.LinkGroup>
    </FlowBiteFooter>
  );
}
