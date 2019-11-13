import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import Component1 from './components/Component1';
import Component2 from './components/Component2';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentComponent: {}
    }
  }

  componentChange = (comp) => {
    console.log(this.state)
  }

  render() {
    return (
      <>
        <Router>
          <nav style={{
            display: "flex",
            fontSize: "20px",
            fontFamily: "Helvetica",
            textTransform: "uppercase"
          }}>
            <NavLink style={{ margin: '20px' }} to='/component1'>component1</NavLink>
            <NavLink style={{ margin: '20px' }} to='/component2'>component2</NavLink>
          </nav>
          <Switch>
            <Route exact path="/component1">
              <Component1 componentChange={this.componentChange} />
            </Route>
            <Route exact path="/component2">
              <Component2 componentChange={this.componentChange} />
            </Route>
          </Switch>
        </Router>
        <p>Rendered element: {this.state.currentComponent.constructor.name}</p>
      </>
    );
  }
}

export default App;
