import React from 'react';

function Filter(props) {

  const styles = {
    label: {
      margin: '1rem',
    },
    span: {
      display: 'block',
    },
    container: {
      width: '20%',
      height: 'max-content',
      padding: '1rem',
      border: '1px solid black',
      margin: '1rem',
    },
    heading: {
      fontSize: '14px',
      padding: '.3rem',
      margin: '.3rem',
    }
  }

  return (
    <aside style={styles.container}>
      <h1 style={styles.heading}>{props.heading}</h1>
      {props.list.map(element => {
        return (
          <span style={styles.span}>
            {element.checked
              ? <input type="checkbox" name={element} id={element} checked />
              : <input type="checkbox" name={element} id={element} />
            }
            <label for={element} style={styles.label}>
              {element.name}
            </label>
          </span>
        )
      })}
    </aside>
  );
}

export default Filter;
