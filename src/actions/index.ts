const updateLanguage = (language: string): {type: string, payload: string} => ({
  type: 'UPDATE_LANGUAGE',
  payload: language
});

export default updateLanguage;
