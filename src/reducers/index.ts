import { Action, RootState } from '../types';

const initialState = {
  defaultLang: 'ES',
  selectedLang: '',
};

const rootReducer = (state: RootState = initialState, action: Action): RootState => {
  const { type, payload } = action;
  switch (type) {
    case 'UPDATE_LANGUAGE':
      return { ...state, selectedLang: payload };
    default:
      return state;
  }
};

export default rootReducer;
