import { motion } from "framer-motion";
import Hero from "../shared/hero";
import LinkGroup from "../shared/links/link-group";

export default function HomePageHero({}) {
  const headingText = "Place your bets!";
  const subheadingText =
    "Use our statistics and data-driven AI to know more than the next";
  return (
    <motion.div
      className="max-w-xl px-5 xl:px-0"
      initial="hidden"
      whileInView="show"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      <Hero headingText={headingText} subHeadingText={subheadingText} />
      <LinkGroup />
    </motion.div>
  );
}
