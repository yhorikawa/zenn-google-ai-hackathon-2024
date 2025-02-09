import { Footer } from "@/components/layouts/Footer";
import { Header } from "@/components/layouts/Header";
import type React from "react";

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
