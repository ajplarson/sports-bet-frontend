import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { LinkObject } from "./links/types/LinkObject";
import ButtonLink from "./links/button-link";

export default function Hero({
  headingText,
  subHeadingText,
}: {
  headingText: string;
  subHeadingText: string;
}) {
  return (
    <>
      <motion.h1
        className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]"
        variants={FADE_DOWN_ANIMATION_VARIANTS}
      >
        <Balancer>{headingText}</Balancer>
      </motion.h1>
      <motion.p
        className="mt-6 text-center text-gray-500 md:text-xl"
        variants={FADE_DOWN_ANIMATION_VARIANTS}
      >
        <Balancer>{subHeadingText}</Balancer>
      </motion.p>
    </>
  );
}
