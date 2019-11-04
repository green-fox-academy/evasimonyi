import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  // router acts as a wrapper, its a must
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
