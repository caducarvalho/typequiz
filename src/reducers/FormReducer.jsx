const FormReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return { name: action.name };
    default:
      return state;
  }
};

export default FormReducer;
