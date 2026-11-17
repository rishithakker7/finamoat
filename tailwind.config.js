/** @type {import('tailwindcss').Config} */
export default {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Navy + red, taken from the knight icon. Tweak these hex values to fine-tune.
        navy: { 950: '#050E1C', 900: '#0B1F3B', 800: '#132D54', 700: '#1D3E70', 600: '#29508C' },
        accent: { 50: '#FDF1F0', 100: '#FBE1DF', 300: '#F3A09B', 400: '#E8625A', 500: '#D8332A', 600: '#B52720' },
        // near-white neutrals (logo.png has a white background, so the page stays white-ish)
        sand: { 50: '#FBFBFC', 100: '#F2F4F7', 200: '#E6E9EE', 300: '#D3D8E0', 400: '#B8C0CC' },
      },
      fontFamily: {
        serif: ['"Fraunces"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      transitionTimingFunction: {
        'out-strong': 'cubic-bezier(0.23,1,0.32,1)',
        'in-out-strong': 'cubic-bezier(0.77,0,0.175,1)',
      },
    },
  },
  plugins: [],
};
