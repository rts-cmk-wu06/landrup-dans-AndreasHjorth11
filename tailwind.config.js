/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        JapaneseViolet: "#5E2E53",
        Plaster: "#EAEAEA",
        HerbRobert: "#E1A1E9",
        ObsidianShell: "#431567",
        LakeRetbaPink: "#e856eb",
        WarmPurple: "#913693",
        ExplosiveGrey: "#C4C4C4",
        MillionGrey: "#999999",
      },

      fontFamily: {
        Roboto: ["Roboto"],
        Racing: ["Racing Sans One"],
      },

      animation: {
        fade: 'fadeIn 1.5s ease-in-out'
      },

      keyframes: theme => ({
        fadeIn: {
          '0%': { backgroundColor: theme('colors.transparent') },
          '100%': { backgroundColor: theme('colors.JapaneseViolet') },
        }
      })
    },
  },
  plugins: [],
};
