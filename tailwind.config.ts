import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-inter)',
      },
      gridTemplateRows: {
        'store-page': 'min-content max-content',
      },
      dropShadow: {
        'sneaker-card': '0 0px 35px rgba(10, 10, 10, 0.99)',
      },
    },
  },
  plugins: [],
};
export default config;
