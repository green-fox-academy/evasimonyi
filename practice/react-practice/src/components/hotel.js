import React from 'react';

function Hotel(props) {

  const styles = {
    label: {
      margin: '1rem',
    },
    p: {
      display: 'inline-block',
    },
    container: {
      display: 'flex',
      padding: '1rem',
      border: '1px solid black',
      margin: '1rem',
    },
    heading: {
      fontSize: '14px',
      padding: '.3rem',
      margin: '.3rem',
    },
    hotel: {
      display: 'block'
    }
  }

  return (
    <div style={styles.container}>
      {props.list.map(element => {
        return (
          <div style={styles.hotel}>
            <h1 style={styles.heading}>{element.name}</h1>
            <img src={element.imageURL} alt={element.name} />
            <p style={styles.p}>{element.description}</p>
          </div>
        )
      })}
    </div>
  );
}

export default Hotel;
