import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import Component1 from './components/Component1';
import Component2 from './components/Component2';

function App() {
  return (
    <Router>
      <nav style={{ display: "flex", fontSize: "20px", fontFamily: "Helvetica", textTransform: "uppercase" }}>
        <NavLink style={{ margin: '20px' }} to='/component1'>component1</NavLink>
        <NavLink style={{ margin: '20px' }} to='/component2'>component2</NavLink>
      </nav>
      <Switch>
        <Route exact path="/component1" component={Component1} />
        <Route exact path="/component2" component={Component2} />
      </Switch>
    </Router>
  );
}

export default App;
