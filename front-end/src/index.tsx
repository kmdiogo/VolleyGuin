import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {MuiThemeProvider, createMuiTheme} from "@material-ui/core";
import MomentUtils from "@date-io/moment";
import {MuiPickersUtilsProvider} from "@material-ui/pickers";
import { DndProvider } from "react-dnd";
import Backend from 'react-dnd-html5-backend'
import {theme} from "./colorTheme";

ReactDOM.render(
    <React.Fragment>
        <DndProvider backend={Backend}>
            <MuiPickersUtilsProvider utils={MomentUtils}>
                <MuiThemeProvider theme={theme}>
                    <App />
                </MuiThemeProvider>
            </MuiPickersUtilsProvider>
        </DndProvider>
    </React.Fragment>,
    document.getElementById('root')
);

// <React.StrictMode></React.StrictMode>

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
