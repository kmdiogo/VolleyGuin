import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import DashboardPage from './page-components/DashboardPage/DashboardPage'
import SignInPage from './page-components/SignInPage/SignInPage'
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <SignInPage />
        </Route>
        <Route path="/">
          <DashboardPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
