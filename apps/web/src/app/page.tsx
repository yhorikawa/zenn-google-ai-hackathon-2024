import { Footer } from "@/components/layouts/Footer";
import { Header } from "@/components/layouts/Header";
import Link from "next/link";
import type { ReactElement } from "react";

type Participant = {
  id: number;
  name: string;
  imageUrl: string;
};

const participants: Participant[] = [
  { id: 1, name: "宮﨑", imageUrl: "/miyazaki.png" },
  { id: 2, name: "堀川", imageUrl: "/horikawa.png" },
  { id: 3, name: "植森", imageUrl: "/uemori.png" },
  { id: 4, name: "遠藤", imageUrl: "/endo.png" },
  { id: 5, name: "池戸", imageUrl: "/ikedo.png" },
  { id: 6, name: "マンボ", imageUrl: "/mambo.png" },
];

export default function Page(): ReactElement {
  return (
    <>
      <Header />

      <div className="container mx-auto px-4 lg:px-16 mt-6">
        <h1 className="text-3xl font-bold">参加メンバー</h1>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {participants.map((participant) => (
            <div
              key={participant.id}
              className="bg-white shadow-md p-4 rounded-md"
            >
              <div className="flex items-center">
                <img
                  src={participant.imageUrl || "/placeholder.svg"}
                  alt={`${participant.name}のプロフィール画像`}
                  className="w-16 h-16 rounded-full"
                />
                <div className="ml-4">
                  <h2 className="text-lg font-bold">{participant.name}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Link href="/articles/" className="underline block text-center mt-12">
        新聞紙一覧へ
      </Link>

      <Footer />
    </>
  );
}
