export const INCREASE = 'increase';
export const DECREASE = 'decrease';

export const increaseCounter = () => {
  return {
    type: INCREASE,
  }
};

export const decreaseCounter = () => {
  return {
    type: DECREASE,
  }
};
