import React from 'react';

import Header from './components/header'
import Rating from './components/rating'

function App() {

  return (
    <React.Fragment>
      <Header headerText="Hotel Booking" />
      <Rating />
    </React.Fragment>
  );
}

export default App;
