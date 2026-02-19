/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brew-brown': '#3E2723',
        'brew-dark': '#4E342E',
        'brew-medium': '#5D4037',
        'brew-light': '#8D6E63',
        'brew-tan': '#D7CCC8',
        'brew-cream': '#FAF6F0',
        'brew-warm': '#EFEBE9',
        // Keep old names mapped for easy migration
        'soul-lavender': '#D7CCC8',
        'soul-peach': '#BCAAA4',
        'soul-indigo': '#3E2723',
        'soul-cream': '#FAF6F0',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Lato"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
