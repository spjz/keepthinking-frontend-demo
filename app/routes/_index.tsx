import type { MetaFunction } from "@remix-run/node";
import { Header } from "~/components/header";
import { Footer } from "~/components/footer";
import { Artists } from "~/components/artists";
import { Gallery } from "~/components/gallery";
import { Events } from "~/components/events";
import { Channel } from "~/components/channel";

export const meta: MetaFunction = () => {
  return [
    { title: "Keepthinking Front-end Demo" },
    { name: "description", content: "Keepthinking front-end demo, using Remix, Tailwindcss" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col items-center">

      <Header title="Art Gallery" />

      <main className="w-8/12 px-6">
        <Gallery />
        <Events />
        <Channel />
        <Artists />
      </main>

      <Footer />
    </div>
  );
}
