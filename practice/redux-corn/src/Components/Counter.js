import React from 'react';
import Button from './Button';
import { connect } from 'react-redux';
import { increaseCounter, decreaseCounter } from '../actions';

function Counter({ counter, increaseCounter, decreaseCounter }) {
  return (
    <>
      <Button text="increase" onClick={increaseCounter} />
      <span>{counter}</span>
      <Button text="decrease" onClick={decreaseCounter} />
    </>
  );
}

const mapStateToProps = store => {
  return {
    counter: store.counter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increaseCounter: () => { dispatch(increaseCounter()) },
    decreaseCounter: () => { dispatch(decreaseCounter()) },
  };
}

// tribesban igy volt siman, why?
// const mapDispatchToProps = {
// increaseCounter,
// decreaseCounter,
// };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);