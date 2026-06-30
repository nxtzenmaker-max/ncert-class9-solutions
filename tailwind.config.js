export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#1d4ed8", foreground: "#ffffff" },
        accent: { DEFAULT: "#f97316", foreground: "#ffffff" },
        foreground: "#111827",
        border: "#e5e7eb",
        muted: { DEFAULT: "#f3f4f6", foreground: "#6b7280" },
        card: { DEFAULT: "#ffffff", foreground: "#111827" },
      },
    },
  },
  plugins: [],
}
