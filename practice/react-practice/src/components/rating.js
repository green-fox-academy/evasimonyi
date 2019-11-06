import React from 'react';

function Rating(props) {
  const ratings = [];
  for (let i = 1; i < 6; i++) {
    ratings.push(i);
  }
  return (
    <React.Fragment>
      <h1>Star rating</h1>
      {ratings.map((element, index) => {
        return (
          <li key={index}>
            {element} {index === 0 ? `star` : `stars`}
          </li>
        )
      })}
    </React.Fragment>
  );
}

export default Rating;
