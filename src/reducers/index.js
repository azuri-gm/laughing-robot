const initialState = {
  defaultLang: 'ES',
  selectedLang: '',
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'UPDATE_LANGUAGE':
      return { ...state, selectedLang: payload };
    default:
      return state;
  }
};

export default rootReducer;
