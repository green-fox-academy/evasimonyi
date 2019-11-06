import React from 'react';

function Rating(props) {

  const styles = {
    label: {
      margin: '1rem',
    },
    span: {
      display: 'block',
    },
    ratingContainer: {
      width: '20%',
      padding: '1rem',
      border: '1px solid black',
    },
    heading: {
      fontSize: '14px',
      padding: '.3rem',
      margin: '.3rem',
    }
  }
  const ratings = [];
  for (let i = 1; i < 6; i++) {
    ratings.push(i);
  }
  return (
    <aside style={styles.ratingContainer}>
      <h1 style={styles.heading}>Star rating</h1>
      {ratings.map((element, index) => {
        return (
          <span style={styles.span}>
            <input type="checkbox" name={element} id={element} />
            <label for={element} style={styles.label}>
              {element} {index === 0 ? `star` : `stars`}
            </label>
          </span>
        )
      })}
    </aside>
  );
}

export default Rating;
