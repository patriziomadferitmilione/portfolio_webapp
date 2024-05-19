// Router
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link as RouterLink,
} from 'react-router-dom'

// Components
import Home from './components/Home'
import Portfolio from './components/Portfolio'

// MUI Components
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import DarkModeIcon from '@mui/icons-material/DarkMode'

// CSS
import './App.css'

// Utilities
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useState, useMemo } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'

const colors = {
  richBlack: '#001219',
  midnightGreen: '#005f73',
  darkCyan: '#0a9396',
  tiffanyBlue: '#94d2bd',
  vanilla: '#e9d8a6',
  gamboge: '#ee9b00',
  alloyOrange: '#ca6702',
  rust: '#bb3e03',
  rufous: '#ae2012',
  auburn: '#9b2226',
}

const getDesignTokens = (mode: 'light' | 'dark') => ({
  palette: {
    mode,
    primary: {
      main: mode === 'dark' ? colors.tiffanyBlue : colors.midnightGreen,
    },
    secondary: {
      main: mode === 'dark' ? colors.rufous : colors.gamboge,
    },
    error: {
      main: mode === 'dark' ? colors.rust : colors.auburn,
    },
    background: {
      default: mode === 'dark' ? colors.richBlack : colors.vanilla,
      paper: mode === 'dark' ? colors.darkCyan : colors.vanilla,
    },
    text: {
      primary: mode === 'dark' ? colors.vanilla : colors.richBlack,
      secondary: mode === 'dark' ? colors.gamboge : colors.richBlack,
    },
  },
})

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const [mode, setMode] = useState<'light' | 'dark'>(
    prefersDarkMode ? 'dark' : 'light'
  )
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode])

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename="/portfolio_webapp">
        <AppBar position="static">
          <Toolbar>
            <RocketLaunchIcon
              sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1 }}
            />
            <Button color="inherit" component={RouterLink} to="/">
              Home
            </Button>
            <Button color="inherit" component={RouterLink} to="/portfolio">
              Portfolio
            </Button>
            <Box flexGrow={1} />
            <DarkModeIcon onClick={toggleTheme} sx={{ mr: 2 }} />
          </Toolbar>
        </AppBar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
