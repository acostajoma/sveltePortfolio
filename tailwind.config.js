/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      screens: {
        'max-lg' : {'max' : '1023px'}
      }
    }
  },
  plugins: [require ('daisyui')],
  daisyui: {
    themes: ["winter", "night"]
  }
};