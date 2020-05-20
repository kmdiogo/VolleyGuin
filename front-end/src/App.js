import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import DashboardPage from './components/DashboardPage/DashboardPage'
import SignInPage from './components/SignInPage/SignInPage'
import './App.css';
import CssBaseline from "@material-ui/core/CssBaseline";

import {MuiPickersUtilsProvider} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

function App() {
    return (
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <React.Fragment>
                <CssBaseline />
                <Router>
                    <Switch>
                        <Route path="/login" component={SignInPage} />
                        <Route path="/" component={DashboardPage} />
                    </Switch>
                </Router>
            </React.Fragment>
        </MuiPickersUtilsProvider>
    );
}

export default App;
