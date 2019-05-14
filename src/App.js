import React from 'react'
import Routes from './routes'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import { blue, indigo } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: blue[900]
    },
    primary: {
      main: indigo[700]
    }
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '"Lato"',
      'sans-serif'
    ].join(',')
  }
})

const App = () => (
  <div>
    <MuiThemeProvider theme={theme}>
      <Routes/>
    </MuiThemeProvider>
  </div>
)

export default App