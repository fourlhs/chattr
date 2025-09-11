/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#f6e0feff',
          200: '#f0bafdff',
          300: '#e77dfcff',
          400: '#c238f8ff',
          500: '#860ee9ff',
          600: '#7202c7ff',
          700: '#6203a1ff',
          800: '#590785ff',
          900: '#590c6eff',
        },
        purple: {
          50: '#f0fdfa',
          100: '#fbccf8ff',
          200: '#f699f0ff',
          300: '#ea5ee8ff',
          400: '#d42dd1ff',
          500: '#ad14b8ff',
          600: '#940d8fff',
          700: '#760f6aff',
          800: '#5e1155ff',
          900: '#4e134aff',
        },
        blue: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
}


