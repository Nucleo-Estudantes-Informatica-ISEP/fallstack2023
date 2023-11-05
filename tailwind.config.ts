import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    themeVariants: ['dark', 'light'],
    extend: {
      colors: {
        'text': 'var(--text)',
        'background': 'var(--background)',
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
        'accent': 'var(--accent)',
        'accent-alternative': 'var(--accent-alternative)',
      },
      animation: {
        fade: 'fade ease-out 1s 1.5s forwards',
        'fade-imm': 'fade ease-out 200ms',
        'bounce-delayed-1': 'bounce 1s ease-in-out infinite 50ms',
        'bounce-delayed-2': 'bounce 1s ease-in-out infinite 100ms'
      },
      aspectRatio: {
        '1080/1080': '1080 / 1080'
      },
      gridTemplateColumns: {
        'responsiveness-180px-columns': 'repeat(auto-fit, minmax(250px, 1fr))'
      },
      keyframes: {
        fade: {
          from: { opacity: '0' },
          to: { opacity: '1' }
        }
      },
      fontFamily: {
        good__times: ['Good Times', 'Arial', 'sans-serif'],
        sans: ['Roboto', 'Arial', 'sans-serif']
      },
      dropShadow: {
        '3xl': '2px 2px 0.5px rgba(0, 0, 0, 0.33)',
        '4xl': '2px 3px 4px rgba(0, 0, 0, 0.33)',
        'fallstack-logo-shadow': '2px 3px 4px #f97316',
        'fallstack-text-shadow': '1px 1px 0.5px #f97316'
      },
      translate: {
        200: '200%'
      }
    }
  },
  plugins: []
}
export default config
