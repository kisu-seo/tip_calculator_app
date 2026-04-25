/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-900':  '#00474B',
        'green-800':  '#085C61',
        'green-750':  '#0D686D',
        'green-400':  '#26C2AE',
        'green-200':  '#9FE6DF',
        'grey-600':   '#3D6666',
        'grey-550':   '#547878',
        'grey-500':   '#5E7A7D',
        'grey-400':   '#7F9D9F',
        'grey-300':   '#9EBBBD',
        'grey-200':   '#C5E4E7',
        'grey-50':    '#F3F9FA',
        'orange-400': '#E17052',
      },
      fontSize: {
        'preset-1': ['48px', { lineHeight: '71px',  letterSpacing: '-1px',    fontWeight: '700' }],
        'preset-2': ['32px', { lineHeight: '47px',  letterSpacing: '-0.67px', fontWeight: '700' }],
        'preset-3': ['24px', { lineHeight: '36px',  letterSpacing: '0px',     fontWeight: '700' }],
        'preset-4': ['20px', { lineHeight: '30px',  letterSpacing: '0px',     fontWeight: '700' }],
        'preset-5': ['16px', { lineHeight: '24px',  letterSpacing: '0px',     fontWeight: '700' }],
        'preset-6': ['13px', { lineHeight: '19px',  letterSpacing: '0px',     fontWeight: '700' }],
      },
      fontFamily: {
        'space-mono': ['"Space Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
