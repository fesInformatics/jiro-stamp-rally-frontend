import { createTheme } from '@mui/material/styles'

const DefaultTheme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: '#FDF650',
          width: '100%',
          height: '100%',
          paddingTop: '30%',
          paddingLeft: '15%',
          paddingRight: '15%',
          [theme.breakpoints.up('sm')]: {
            paddingLeft: '30%',
            paddingRight: '30%',
          },
        }),
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {

        }
      }
    }
  },
})

export default DefaultTheme
