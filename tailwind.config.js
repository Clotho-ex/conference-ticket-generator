/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "oxford-blue": "#0D082D",
        "english-violet": "#4B4869",
        "cool-gray": "#8784A5",
        "french-grey": "#D1D0D5",
        white: "#FFFFFF",
        jasper: "#E1604F",
        bittersweet: "#F57463",
      },

      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },

      backgroundImage: {
        "gradient-1": "linear-gradient(90deg, #F37362 0%, #FFF 100%)",
        "gradient-2":
          "linear-gradient(140deg, hsl(248deg 70% 10%) 0%, hsl(251deg 70% 11%) 8%, hsl(254deg 69% 11%) 15%, hsl(256deg 69% 11%) 22%, hsl(259deg 69% 11%) 28%, hsl(262deg 70% 11%) 34%, hsl(265deg 70% 11%) 40%, hsl(268deg 71% 11%) 46%, hsl(271deg 73% 11%) 52%, hsl(275deg 74% 11%) 57%, hsl(278deg 76% 11%) 63%, hsl(281deg 78% 11%) 68%, hsl(284deg 81% 11%) 73%, hsl(288deg 84% 11%) 79%, hsl(291deg 87% 11%) 84%, hsl(294deg 91% 11%) 89%, hsl(297deg 95% 10%) 95%, hsl(300deg 100% 10%) 100%)",
        "ticket-pattern": "url('/assets/images/pattern-ticket.svg')",
      },

      fontFamily: {
        inconsolata: "Inconsolata",
      },

      spacing: {
        "spacing-1": "2px",
        "spacing-2": "4px",
        "spacing-3": "6px",
        "spacing-4": "8px",
        "spacing-5": "12px",
        "spacing-6": "16px",
        "spacing-7": "20px",
        "spacing-8": "24px",
        "spacing-9": "32px",
        "spacing-10": "40px",
        "spacing-11": "48px",
        "spacing-12": "64px",
        "spacing-13": "80px",
      },

      borderRadius: {
        none: "0px",
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
};
