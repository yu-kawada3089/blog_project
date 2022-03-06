module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        noto: ["Noto Sans JP"],
        yomogi: ["Yomogi"],
        maru: ["Kiwi Maru"],
        mPlus: ["M PLUS Rounded 1c"],
      },
      backgroundImage: (theme) => ({
        "hero-img": "url(/header_bg.jpg)",
        "card-img": "url(/card_bg.jpg)",
        "footer-img": "url(/footer.jpg)",
        "grey-img": "url(/bg_grey.jpg)",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
