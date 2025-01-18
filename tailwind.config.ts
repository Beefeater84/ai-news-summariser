import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        'text-color': 'var(--text-color)',
      },
      spacing: {
        "max-content": "max-content",
        "min-content": "min-content",
      },
      fontFamily: {
        sans: [
          '"Noto Sans"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
