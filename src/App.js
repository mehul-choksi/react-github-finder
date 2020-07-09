import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import User from './components/users/User'
import Repos from './components/repos/Repos';

import About from './components/Pages/About';
import Home from './components/Pages/Home';
import NotFound from './components/Pages/NotFound';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App = () => {

    return (
      <GithubState>
      <AlertState>
      <div className = "App">
       <Navbar title="Github Finder"/>
        <Router>
          <Switch>
          <Route exact path = "/" component = {Home}/>
            <Route exact path = '/about' component = {About}/>
            <Route exact path = '/users/:login' render={props => (
              <Fragment>
                <User {...props} />        
                <Repos/>
              </Fragment>
            )}/>
            <Route  component = {NotFound}/>
          </Switch>
            
        </Router>  
      </div>
      </AlertState>
      </GithubState>
    );
}

export default App;