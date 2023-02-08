import { red, black } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
      black: '#000000',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: [
      'Vulf Sans',
    ],
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
        font-family: 'Vulf Sans';
        src: url('/fonts/Vulf_Sans-Regular.woff2') format('woff2'),
             url('/fonts/Vulf_Sans-Regular.woff') format('woff');
        font-named-instance: 'Regular';
        font-weight: normal;
        font-style: normal;
      }
      
      @font-face {
        font-family: 'Vulf Sans';
        src: url('/fonts/Vulf_Sans-Bold.woff2') format('woff2'),
          url('/fonts/Vulf_Sans-Bold.woff') format('woff');
        font-named-instance: 'VSBold';
        font-weight: bold;
        font-style: normal;
      }
      
      @font-face {
        font-family: 'Vulf Sans';
        src: url('/fonts/Vulf_Sans-Italic.woff2') format('woff2'),
             url('/fonts/Vulf_Sans-Italic.woff') format('woff');
        font-weight: normal;
        font-style: italic;
      }
      
      @font-face {
        font-family: 'Vulf Sans';
        src: url('/fonts/Vulf_Sans-Bold_Italic.woff2') format('woff2'),
             url('/fonts/Vulf_Sans-Bold_Italic.woff') format('woff');
        font-weight: bold;
        font-style: italic;
      }
      .waves {
        position:relative;
        width: 100%;
        height:15vh;
        margin-bottom:-7px; /*Fix for safari gap*/
        min-height:100px;
        max-height:150px;
      }
      .parallax > use {
        animation: move-forever 25s cubic-bezier(.55,.5,.45,.5)     infinite;
      }
      .parallax > use:nth-child(1) {
        animation-delay: -2s;
        animation-duration: 7s;
      }
      .parallax > use:nth-child(2) {
        animation-delay: -3s;
        animation-duration: 10s;
      }
      .parallax > use:nth-child(3) {
        animation-delay: -4s;
        animation-duration: 13s;
      }
      .parallax > use:nth-child(4) {
        animation-delay: -5s;
        animation-duration: 20s;
      }
      @keyframes move-forever {
        0% {
         transform: translate3d(-90px,0,0);
        }
        100% { 
          transform: translate3d(85px,0,0);
        }
      }

      `,
    },
  },
  overrides: {
    MuiFormControlLabel: {
      label: {
        fontSize: '100rem',
      },
    },
    MuiLink: {
      root: {
        color: '#000000',
        textDecoration: 'none',
        fontWeight: 'bold',
        '&:hover': {
          color: '#19857b',
        },
      },
    },
  },
});

// theme.typography.headerTitle = {
//   fontSize: '1.2rem',
//   '@media (min-width:600px)': {
//     fontSize: '1.8rem',
//   },
//   '@media (min-width:400px)': {
//     fontSize: '1.6rem',
//   },
//   [theme.breakpoints.up('md')]: {
//     fontSize: '2.4rem',
//   },
// }

// theme.typography.headerNav = {
//   fontSize: '1.2rem',
//   '@media (min-width:600px)': {
//     fontSize: '1.4em',
//   },
//   '@media (min-width:400px)': {
//     fontSize: '1.2rem',
//   },
//   [theme.breakpoints.up('md')]: {
//     fontSize: '1.4rem',
//   },
// }

export default theme;
