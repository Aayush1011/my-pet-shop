import { Inter } from "next/font/google";
import { DM_Sans } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const dmSans = DM_Sans({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});
