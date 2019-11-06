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
      flexWrap: 'wrap',
      padding: '1rem',
      border: '1px solid black',
      margin: '1rem',
      width: '50%',
    },
    heading: {
      fontSize: '14px',
      padding: '.3rem',
      margin: '.3rem',
    },
    hotel: {
      backgroundColor: 'azure',
    },
    img: {
      display: 'inline-block',
      height: '100px',
      width: '60px',
    }
  }

  return (
    <div style={styles.container}>
      {props.list.map(element => {
        return (
          <>
            <h1 style={styles.heading}>{element.name}</h1>
            <div style={styles.hotel}>
              <img src={element.imageURL} alt={element.name} style={styles.img} />
              <p style={styles.p}>{element.description}</p>
            </div>
          </>
        )
      })}
    </div>
  );
}

export default Hotel;
