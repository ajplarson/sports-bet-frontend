import { motion } from "framer-motion";
import { DEPLOY_URL, FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { Github } from "../icons";
import ButtonLink from "@/components/shared/links/button-link";

export default function LinkGroup({}: {}) {
  const githubLink = {
    href: "https://github.com/steven-tey/precedent",
    icon: <Github />,
    text: "Star on Github",
  };
  const vercelLink = {
    href: DEPLOY_URL,
    icon: (
      <svg
        className="h-4 w-4 group-hover:text-black"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 4L20 20H4L12 4Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    text: "Deploy to Vercel",
  };

  return (
    <motion.div
      className="mx-auto mt-6 flex items-center justify-center space-x-5"
      variants={FADE_DOWN_ANIMATION_VARIANTS}
    >
      <ButtonLink linkObject={vercelLink} isDarkMode />
      <ButtonLink linkObject={githubLink} />
    </motion.div>
  );
}
