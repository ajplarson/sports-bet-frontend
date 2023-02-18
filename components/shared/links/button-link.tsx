import { LinkObject } from "./types/LinkObject";

export default function ButtonLink({
  linkObject,
  isDarkMode = false,
}: {
  linkObject: LinkObject;
  isDarkMode?: boolean;
}) {
  const { href, icon, text } = linkObject;
  const colorClasses = isDarkMode
    ? "border-black bg-black text-white hover:bg-white hover:text-black"
    : "border-gray-300 bg-white text-gray-600 shadow-md hover:border-gray-800";
  return (
    <a
      className={`group flex max-w-fit items-center justify-center space-x-2 rounded-full border px-5 py-2 text-sm  transition-colors ${colorClasses}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
      <p>{text}</p>
    </a>
  );
}
