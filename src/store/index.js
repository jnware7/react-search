import { createStore } from 'redux';
import reducer from '../reducer';

const INITIAL_STATE = {
  username: "Jeff",
  totalAmount: 2500701,
  previousAmount:2500701
};

export const store = createStore(reducer, INITIAL_STATE);
