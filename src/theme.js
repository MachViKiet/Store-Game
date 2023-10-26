import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

// Create a theme instance.

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#fff',
          light: '#42a5f5',
          dark: '#1565c0',
          contrastText: '#fff'
        },
        background:{
          paper: '#3f3e45'
        },
        cover:{
          main: '#000',
          bg1: "#030e23", // bgcolor: content
          bg2: "#042b73", // bgcolor: head1
          bg3: "#031b4b", // bgcolor: head2
          bg4: "#1d2433", // bgcolor: block
          light: '#1a2a3c', // 
          overlay1:'#red', // bgcolor : overlay
        },
        text:{
          primary: '#fff',
          secondary: '#fff'
        },
        common: {
          background: '#red'
        },
        action: {
          active: '#fff'
        }
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#fff',
          light: '#42a5f5',
          dark: '#1565c0',
          contrastText: '#fff'
        }
      }
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1080,
      lg: 1200,
      xl: 1536,
    },
  },

  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          color: 'red',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          lineHeight: '1.3'
        },
      },
    }
  },
  // ...other properties
})

export default theme
