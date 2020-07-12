import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import DashboardPage from './components/DashboardPage/DashboardPage'
import SignInPage from './components/SignInPage/SignInPage'
import './App.css';
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  return (
      <React.Fragment>
        <CssBaseline />
        <Router>
          <Switch>
            <Route path="/login" component={SignInPage} />
            <Route path="/" component={DashboardPage} />
          </Switch>
        </Router>
      </React.Fragment>
  );
}

export default App;
