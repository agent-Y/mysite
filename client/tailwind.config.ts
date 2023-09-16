import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    darkMode: 'media', 
    colors: {
      primary: '#36454F',
      secondary: '#4ECDC4',
      orange: '#ff6600',
      white: '#FFFFFF',
      black: '#000000',
      red: '#FF0000',
      gray: '#777777',
      lightGray: '#DDDDDD',
      darkGray: '#333333',
      lightBlue: '#0080FF',
      blue: '#0000FF',
     
    },
    // extend: {
    //   backgroundImage: {
    //     'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
    //     'gradient-conic':
    //       'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    //   },
    // },
  },
  plugins: [],
}
export default config
