import { ReactNode } from "react";

export interface LinkObject {
  href: string;
  icon: ReactNode;
  text: string;
  isDark?: boolean;
}
