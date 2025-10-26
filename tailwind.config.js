export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      animation: {
        'bounce': 'bounce 1.5s infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blob': 'blob 7s infinite',
        'fadeIn': 'fadeIn 0.5s ease-in',
        'float': 'float 3s ease-in-out infinite',
        'float-delay-1': 'float 3s ease-in-out 0.5s infinite',
        'float-delay-2': 'float 3s ease-in-out 1s infinite',
        'float-delay-3': 'float 3s ease-in-out 1.5s infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
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