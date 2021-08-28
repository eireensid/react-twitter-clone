import { createTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

export const theme = createTheme({
  typography: {
    fontFamily: [
      'system-ui',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      'Ubuntu',
      '"Helvetica Neue"',
      'sans-serif'
    ].join(','),
  },
  palette: {
    primary: {
      main: 'rgb(29, 161, 242)',
      dark: 'rgb(26, 145, 218)',
      contrastText: '#fff'
    },
    secondary: {
      main: 'rgb(26, 145, 218)'
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#fff'
    }
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 30,
        textTransform: 'none',
        fontSize: 16,
        height: 40
      },
      textPrimary: {
        paddingLeft: 20,
        paddingRight: 20
      },
      outlinedPrimary: {
        borderColor: 'rgb(29, 161, 243)'
      }
    },
    MuiFilledInput: {
      underline: {
        '&:after': {
          borderBottomWidth: '2px'
        },
        '&:before': {
          borderColor: '#000',
          borderBottomWidth: '2px'
        }
      },
      input: {
        backgroundColor: 'rgb(245, 248, 250)'
      }
    },
    MuiDialog: {
      paper: {
        borderRadius: 15
      }
    },
    MuiDialogActions: {
      root: {
        marginBottom: 8
      }
    }
  }
});

export default theme