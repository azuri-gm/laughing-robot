import { createStore } from 'redux';
import rootReducer from '../reducers/index';
import { RootState } from '../types';

const store = createStore<RootState, never, never, never>(
  rootReducer,
  // eslint-disable-next-line no-underscore-dangle
  // (window.__REDUX_DEVTOOLS_EXTENSION__ ) && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
