import { createStore, combineReducers } from 'redux';

import { counter } from './reducer';

export default createStore(
  combineReducers({
    counter,
  })
);
