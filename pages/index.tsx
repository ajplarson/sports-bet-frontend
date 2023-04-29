import Card from "@/components/shared/card";
import Layout from "@/components/layout";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";

import { BET_MGM_URL } from "@/lib/constants";
import HomePageHero from "@/components/home/home-page-hero";
import { MlbLogo } from "@/components/shared/icons";
import BasketballIcon from "@/components/shared/icons/basketball";

export default function Home() {
  return (
    <Layout>
      <HomePageHero />
      {/* here we are animating with Tailwind instead of Framer Motion because Framer Motion messes up the z-index for child components */}
      <div className="my-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {cards.map(({ title, content }) => (
          <Card
            key={title}
            title={title}
            content={
                content
              
            }
          />
        ))}
      </div>
    </Layout>
  );
}

const cards = [
  {
    title: "Baseball, Basketball, and more",
    content: (
      <div className="flex items-center justify-center space-x-20">
        <MlbLogo width="250" height="125" />
      </div>
    ),
  },
  {
    title: "Neural Networks pre-trained and ready to go",
    content: <WebVitals />,
  },
  {
    title: "Built-in Auth + Database",
    content: (
      <div className="flex items-center justify-center space-x-20">
        <Image alt="Auth.js logo" src="/authjs.webp" width={50} height={50} />
        <Image alt="Prisma logo" src="/prisma.svg" width={50} height={50} />
      </div>
    ),
  },
];
