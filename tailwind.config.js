/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#F4F4F0",
        ink: "#000000",
        brutal: {
          bg: "#F4F4F0",
          black: "#000000",
          white: "#FFFFFF",
          yellow: "#FFE600", // Acid Yellow
          pink: "#FF499E",   // Hot Pink
          cyan: "#00F0FF",   // Electric Cyan
          lime: "#23F365",   // Cyber Lime / Acid Green
          purple: "#A055FF", // Neon Purple
          orange: "#FF6600", // Retro Orange
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', '"Archivo Black"', 'system-ui', 'sans-serif'],
        archivo: ['"Archivo Black"', 'sans-serif'],
        sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      borderWidth: {
        '3': '3px',
      },
      boxShadow: {
        // Core required hard offset drop shadows
        'hard': '6px 6px 0px 0px rgba(0, 0, 0, 1)',
        'hard-sm': '3px 3px 0px 0px rgba(0, 0, 0, 1)',
        'hard-md': '4px 4px 0px 0px rgba(0, 0, 0, 1)',
        'hard-lg': '8px 8px 0px 0px rgba(0, 0, 0, 1)',
        'hard-xl': '12px 12px 0px 0px rgba(0, 0, 0, 1)',
        'hard-cyan': '6px 6px 0px 0px #00F0FF',
        'hard-pink': '6px 6px 0px 0px #FF499E',
        'hard-yellow': '6px 6px 0px 0px #FFE600',
        'hard-pressed': '1px 1px 0px 0px rgba(0, 0, 0, 1)',
      },
    },
  },
  plugins: [],
}
