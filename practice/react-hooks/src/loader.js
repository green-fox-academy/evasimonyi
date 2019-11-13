import React from 'react';
import styles from './loader.css';
import loaderImage from './Gear2.svg';

const LoadingPage = () => {
  return (
    <img className={styles.loader} src={loaderImage} alt="loader" />
  );
};

export default LoadingPage;