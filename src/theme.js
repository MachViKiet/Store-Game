import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

// Create a theme instance.

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#1976d2',
          light: '#42a5f5',
          dark: '#1565c0',
          contrastText: '#fff'
        },
        cover:{
          main: '#fff',
          bg1: "#030e23",
          bg2: "#042b73",
          bg3: "#031b4b",
          bg4: "#000717",
          light: '#1a2a3c'
        }
      }
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
  // ...other properties
})

export default theme
