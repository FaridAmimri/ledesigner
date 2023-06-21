/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  mode: 'jit',
  theme: {
    extend: {
      screens: {
        sm: '480px'
      }
    }
  },
  plugins: []
}
