// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline'
// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//   },
// });

// function App() {
//   return (
//     <ThemeProvider theme={darkTheme}>
//       <CssBaseline />
//       <main>This app is using the dark mode</main>
//     </ThemeProvider>
//   );
// }

// export default App;



import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Container } from '@mui/material';
import MainContent from './Components/MainContent';
import './App.css';

const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

function MyApp() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Container
    className='margins'
      sx={{
        width: '100vw',
        height: '100vh',
        bgcolor: 'background.default',
        color: 'text.primary',
      }}
    ><div style={{ cursor: 'pointer' }} onClick={colorMode.toggleColorMode}>
        {theme.palette.mode} mode
        <IconButton sx={{ ml: 1 }} color="inherit">
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </div>
      <MainContent/>
    </Container>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <MyApp />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
