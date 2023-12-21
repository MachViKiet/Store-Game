import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

// Create a theme instance.

// const theme = extendTheme({
//   colorSchemes: {
//     light: {
//       palette: {
//         primary: {
//           main: '#fff',
//           light: '#42a5f5',
//           dark: '#1565c0',
//           contrastText: '#fff'
//         },
//         background:{
//           paper: '#fff'
//         },
//         cover:{  // Custom 
//           main: '#000',
//           bg1: "#030e23", // bgcolor: content
//           bg2: "#042b73", // bgcolor: head1
//           bg3: "#031b4b", // bgcolor: head2
//           bg4: "#1d2433", // bgcolor: block
//           light: '#1a2a3c', // 
//           overlay1:'#red', // bgcolor : overlay
//           paper: '#3f3e45'
//         },
//         text:{
//           primary: '#fff',
//           secondary: '#fff'
//         },
//         common: {
//           background: '#red'
//         },
//         action: {
//           active: '#fff'
//         }
//       },
//     },
//     dark: {
//       palette: {
//         primary: {
//           main: '#fff',
//           light: '#42a5f5',
//           dark: '#1565c0',
//           contrastText: '#fff'
//         }
//       }
//     }
//   },
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 1080,
//       lg: 1200,
//       xl: 1536,
//     },
//   },

//   components: {
//     // Name of the component
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           textTransform: 'none',
//         },
//       },
//     },
//     MuiTextField: {
//       styleOverrides: {
//         root: {
//           color: 'red',
//         },
//       },
//     },
//     MuiTypography: {
//       styleOverrides: {
//         root: {
//           lineHeight: '1.3'
//         },
//       },
//     }
//   },
//   // ...other properties
// })

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
          paper: '#dbdbdb',
          default: '#f3f4f6'
        },
        cover:{  // Custom 
          main: '#000',
          bg1: "#f3f4f6", // bgcolor: content
          bg2: "#0a59cc", // bgcolor: head1
          bg3: "#2579f2", // bgcolor: head2
          bg4: "#fff", // bgcolor: block
          light: '#1a2a3c', // 
          overlay1:'#red', // bgcolor : overlay
          paper: '#2b3a46',
          drawer: '#e7e7e7'
        },
        text:{
          primary: '#000',
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
        },
        background:{
          paper: '#dbdbdb',
          default: '#000d21'
        },
        cover:{  // Custom 
          main: '#000',
          bg1: "#000d21", // bgcolor: content
          bg2: "#171d2587", // bgcolor: head1
          bg3: "#171d2587", // bgcolor: head2
          bg4: "#2b3a46", // bgcolor: block
          light: '#1a2a3c', // 
          overlay1:'#red', // bgcolor : overlay
          paper: '#2b3a46',
          drawer: '#000017'

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
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 920,
      lg: 1050,
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
