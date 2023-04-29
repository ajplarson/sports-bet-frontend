import { motion } from "framer-motion";
import { BET_MGM_URL, FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { Github, SportsBetLogo } from "../icons";
import ButtonLink from "@/components/shared/links/button-link";

export default function LinkGroup({}: {}) {
  const githubLink = {
    href: "https://github.com/ajplarson/sports-bet-frontend",
    icon: <Github />,
    text: "Contribute on Github",
  };
  const betMgmLink = {
    href: BET_MGM_URL,
    icon: <SportsBetLogo />,
    text: "Bet now!",
  };

  return (
    <motion.div
      className="mx-auto mt-6 flex items-center justify-center space-x-5"
      variants={FADE_DOWN_ANIMATION_VARIANTS}
    >
      <ButtonLink linkObject={betMgmLink} />
      <ButtonLink linkObject={githubLink} isDarkMode />
    </motion.div>
  );
}
