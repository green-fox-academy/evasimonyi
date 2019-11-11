import React from 'react';
import Button from './Button';
import { connect } from 'react-redux';
import { increaseCounter, decreaseCounter } from '../actions';

function Counter({ counter, increase, decrease }) {
  return (
    <>
      <Button text="increase" onClick={increase} />
      <span>{counter}</span>
      <Button text="decrease" onClick={decrease} />
    </>
  );
}

const mapStateToProps = store => {
  return {
    counter: store,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increase: () => dispatch(increaseCounter()),
    decrease: () => dispatch(decreaseCounter()),
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
