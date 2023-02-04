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
      `,
    },
  },
  overrides: {
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

theme.typography.headerTitle = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.8rem',
  },
  '@media (min-width:400px)': {
    fontSize: '1.6rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
}

theme.typography.headerNav = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.4em',
  },
  '@media (min-width:400px)': {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.4rem',
  },
}

export default theme;
