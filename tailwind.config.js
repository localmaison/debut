/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  prefix: "tw-",
  important: true,
  purge: [
      "./layout/*.liquid",
      "./templates/*.{liquid, json}",
      "./sections/*.liquid",
      "./snippets/*.liquid",
      "./assets/*.{liquid, js}",
    ],
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

