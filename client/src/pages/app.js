import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../theme/theme'
import Board from './board'


const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Board />
  </ThemeProvider>
);

export default App;
