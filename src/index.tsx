import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { theme } from './theme'
import './index.css';
import { store } from './store/store';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
);

