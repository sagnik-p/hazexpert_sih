/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        skin: 'rgba(229, 188, 173, 0.71)',
        boxbg:'rgba(161,161,161,1)',
        box:'rgba(217,217,217,0.15)',
        purpleBlue: 'rgba(94, 89, 207, 0.71)',
        mix: '#a496c6',
        orskin: '#FCA087',
        bluePurple: '#6A7CE2',
        newGray: '#645F5F',
        lightGray: 'rgba(161, 161, 161, 1)',
        feat_1: 'rgba(252, 160, 135, 1)',
        feat_2: 'rgba(106, 124, 226, 1)',
        feat_3: 'rgba(244, 204, 194, 1)',
        feat_text: 'rgba(61, 61, 61, 1)',
        feat_brdr: 'rgba(251, 212, 202, 0.97)',
      },

      fontFamily: {
        'dm-sans': ['DM Sans', 'sans'],
        'lexend-deca': ['Lexend Deca', 'sans'],
      },

      height: {
        '13': '13rem',
        '20.5': '20rem',
        '71': '71rem',
        '90': '90rem',
        '112': '112rem', 
        '200': '200rem',
      },

      spacing: {
        '6.5': '6.5rem',
        '14.5': '14.5rem',
        '22': '22rem',
        '23': '23rem',
        '25': '25rem',
        '27': '27rem',
        '28.5': '28rem',
        '29.5': '29.5rem',
        '30': '30rem',
        '32.5': '32rem',
        '34': '34rem',
        '37': '37rem',
        '42': '42rem',
        '45': '45rem',
        '48.5': '48rem',
        '50': '50rem',
        '56.5': '56.5rem',
        '59': '59rem',
        '60.5': '60rem',
        '86': '86rem',
      },

      borderWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [],
}

