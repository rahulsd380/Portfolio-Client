import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        Inter : ["Inter", "sans-serif"],      // for body font
        Poppins : ["Poppins", "sans-serif"],  //for heading
      },

      colors: {
        primary : {
          10 : "",
          20 : "",
          30 : ''
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
