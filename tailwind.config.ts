import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    
    fontSize: {
      'xxs':['11px','16px'],
      xs: ['12px', '18px'],
      sm: ['13px', '20px'],
      'para':['14px','22px'],
      base:['16px','24px'],
      md:['17px', '26px'],
      lg: ['18px', '28px'],
      xl: ['24px',{
        lineHeight: '32px',
        letterSpacing: '-0.01em',
        
      }],
      '2xl':['26px', {
        lineHeight: '2rem',
        letterSpacing: '-0.01em',
        fontWeight: '500',
      }],
      
    },
    screens:{
      'xs':'360px',
      'sm':'576px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1280px',
      '2xl':'1536px',

    },
    extend: {
      colors:{
        'primary':"#ED7E00",
        'secondary':'#FED7AA',
        'blue':'#000099',
        'lightgray':'#F7F7F8',
        'limeyellow':'#FDBF50',
        'navyblack':'#2A2C41',
        'navyblacklite':"#ceced6",
             

      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
