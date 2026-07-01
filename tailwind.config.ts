import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Shadcn/ui semantic tokens
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // "Chambers & Conviction" brand palette
        navy:     "#0D1B2A",
        gold:     "#C9A84C",
        "gold-light": "#E8C97A",
        cream:    "#F7F3EC",
        slate:    "#3D5A73",
        charcoal: "#1E2D3D",
        "red-accent": "#8B1A1A",
        "color-muted": "#8A9BB0",
      },
      fontFamily: {
        display:  ["'Cormorant Garamond'", "Georgia", "serif"],
        playfair: ["'Cormorant Garamond'", "Georgia", "serif"],
        body:     ["'DM Sans'", "system-ui", "sans-serif"],
        mono:     ["'JetBrains Mono'", "monospace"],
        sans:     ["'DM Sans'", "system-ui", "sans-serif"],
      },
      fontSize: {
        xs:   ["0.75rem",  { lineHeight: "1rem" }],
        sm:   ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem",     { lineHeight: "1.5rem" }],
        lg:   ["1.125rem", { lineHeight: "1.75rem" }],
        xl:   ["1.25rem",  { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem",  { lineHeight: "2rem" }],
        "3xl": ["2rem",    { lineHeight: "2.25rem" }],
        "4xl": ["2.75rem", { lineHeight: "1.1" }],
        "5xl": ["3.75rem", { lineHeight: "1.05" }],
        "6xl": ["5rem",    { lineHeight: "1" }],
      },
      borderRadius: {
        sm:   "4px",
        md:   "8px",
        lg:   "16px",
        full: "9999px",
        DEFAULT: "8px",
      },
      boxShadow: {
        sm:   "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
        md:   "0 4px 12px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.12)",
        lg:   "0 10px 40px rgba(0,0,0,0.2)",
        gold: "0 4px 20px rgba(201,168,76,0.25)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to:   { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to:   { height: "0" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        "count-up": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up":   "accordion-up 0.2s ease-out",
        "fade-up":        "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in":        "fade-in 0.6s ease forwards",
        "count-up":       "count-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      screens: {
        xs: "375px",
        sm: "480px",
        md: "768px",
        lg: "1280px",
        xl: "1600px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
