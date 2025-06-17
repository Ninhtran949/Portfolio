export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      animation: {
        'bounce': 'bounce 1.5s infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      transitionDelay: {
        '100': '100ms',
        '200': '200ms',
      }
    },
  },
  variants: {
    extend: {
      transform: ['hover', 'focus', 'group-hover'],
      scale: ['hover', 'focus', 'group-hover'],
      translate: ['hover', 'focus', 'group-hover'],
    },
  },
  plugins: [],
}