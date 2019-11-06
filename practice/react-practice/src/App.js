import React from 'react';

import Header from './components/header'
import Filter from './components/filter-container'

function App() {
  const ratings = [];
  for (let i = 1; i < 6; i++) {
    if (i === 1) {
      ratings.push(`${i}star`);
    } else {
      ratings.push(`${i}stars`);
    }
  };

  const propertyTypes = ['Apartments', 'Hotels', 'Hostels'];

  return (
    <React.Fragment>
      <Header headerText="Hotel Booking" />
      <Filter heading="Rating" list={ratings} />
      <Filter heading="Property type" list={propertyTypes} />
    </React.Fragment>
  );
}

export default App;
