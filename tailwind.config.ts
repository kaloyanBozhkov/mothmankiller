import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import colors from "./tailwind/colors";
import backgroundImage from "./tailwind/backgroundImages";
import keyframes from "./tailwind/keyframes";
import animation from "./tailwind/animation";

export default {
  content: {
    transform: (content) => content.replace(/taos:/g, ""),
    files: ["./src/**/*.{js,ts,jsx,tsx}"],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      colors,
      backgroundImage,
      keyframes,
      animation,
    },
  },
  plugins: [],
} satisfies Config;
