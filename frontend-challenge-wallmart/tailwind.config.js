module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "science-blue": {
          DEFAULT: "#0071DC",
          50: "#95CBFF",
          100: "#80C1FF",
          200: "#57ADFF",
          300: "#2F9AFF",
          400: "#0686FF",
          500: "#0071DC",
          600: "#0054A4",
          700: "#00376C",
          800: "#001B34",
          900: "#000000",
        },
        "venice-blue": {
          DEFAULT: "#05578F",
          50: "#53B5F9",
          100: "#3FADF8",
          200: "#179CF7",
          300: "#0887DE",
          400: "#066FB6",
          500: "#05578F",
          600: "#033659",
          700: "#011523",
          800: "#000000",
          900: "#000000",
        },
      },
    },
  },
  plugins: [],
};
