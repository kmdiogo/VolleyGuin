import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {MuiThemeProvider, createMuiTheme} from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#a2182f',
        },
        secondary: {
            light: '#A0A0A0',
            main: '#696969',
            contrastText: '#000',
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
});

ReactDOM.render(
  <React.StrictMode>
      <MuiThemeProvider theme={theme}>
          <App />
      </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
