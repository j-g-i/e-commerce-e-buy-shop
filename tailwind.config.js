/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme:{
    extend:{
      colors:{
        textcolor: 'rgba(255,199,73,255)',
        // #ffc749
        bgroundcolor: 'rgba(10,16,30,255)',
        divcolors: 'rgba(16,22,36,255)',
        footerbg: 'rgba(7,13,27,255)',
        textcolortwo: 'rgba(151,155,166,255)',
        
        textcolorthree: 'rgba(12,18,32,255)',
        // #0e1422
        textcolorfour: 'rgba(252,254,255,255)',
        // #fcfeff
        
      }
    }
  },
  plugins: [],
};
