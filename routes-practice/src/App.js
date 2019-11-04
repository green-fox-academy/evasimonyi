import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import Navbar from './components/navbar'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* this is outside of the switch so it will be rendered on every route */}
        <Route render={props => (
          <React.Fragment>
            <Navbar />
          </React.Fragment>
        )}
        />

        <Switch>
          <Route exact path="/"
            render={props => <HomePage />}
          />
          <Route exact path="/about"
            render={props => <AboutPage />}
          />
          <Route exact path="/contact"
            render={props => <ContactPage />}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
