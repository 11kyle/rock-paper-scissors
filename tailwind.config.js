/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'hslDarkText': 'hsl(229, 25%, 31%)',
          'hslScoreText': 'hsl(229, 64%, 46%)',
          'hslHeaderOutline': 'hsl(217, 16%, 45%)',
          'hslBackgroundTop': 'hsl(214, 47%, 23%)',
          'hslBackgroundBottom': 'hsl(237, 49%, 15%)',
          'hslScissorsTop': 'hsl(39, 89%, 49%)',
          'hslScissorsBottom': 'hsl(40, 84%, 53%)',
          'hslPaperTop': 'hsl(230, 89%, 62%)',
          'hslPaperBottom': 'hsl(230, 89%, 65%)',
          'hslRockTop': 'hsl(349, 71%, 52%)',
          'hslRockBottom': 'hsl(349, 70%, 56%)',
          'hslCyanTop': 'hsl(189, 59%, 53%)',
          'hslCyanBottom': 'hsl(189, 58%, 57%)'
        },
        backgroundImage: {
          'triangle': "url('/src/assets/bg-triangle.svg')"
        },
        backgroundSize: {
          '50%': '50%'
        }
      },
    },
    plugins: [],
  }


// ## Colors

// ### Primary

// - Lizard Gradient: hsl(261, 73%, 60%) to hsl(261, 72%, 63%)
// - Cyan: hsl(189, 59%, 53%) to hsl(189, 58%, 57%)

// ### Background

// - Radial Gradient: hsl(214, 47%, 23%) to hsl(237, 49%, 15%)