import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'content-primary': '#ffffff',
        'content-secondary': '#c5c9d9',
        'surface-input': '#1C2130',
        'surface-hover': '#202531',
        'border-primary': '#353947',
        'bg-dark': '#000000',
        'bg-dark-secondary': '#18181b',
        'accent-purple': '#7857ff',
        'accent-pink': '#fa5560',
        'accent-blue': '#4d91ff',
      },
      fontFamily: {
        'jakarta': ['"Plus Jakarta Sans"', 'Arial', 'Helvetica', 'sans-serif'],
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '1.63rem',
      },
      fontSize: {
        'xs': '12px',
        'sm': '14px',
        'base': '16px',
        'md': '18px',
        'lg': '22px',
        'xl': '28px',
      },
    },
  },
  plugins: [],
}

export default config
