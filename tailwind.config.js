module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: theme => ({
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),

    },
    fontFamily: {
      'audiowide': ['Audiowide', 'cursive'],
      'quicksand': ['Quicksand', 'sans-serif']
    }
  },
  plugins: [],
  darkMode: 'class'
}
