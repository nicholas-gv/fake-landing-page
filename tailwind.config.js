/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        'green':'#008000',
        'orange': {
          light: "#eb8100",
          DEFAULT: '#ff9500',
        },
        'blue':'#0d59dd',
        'purple':'#9a00ee',
        'red':'#f30000',
      }, 
    }
  },
  plugins: [],
}

