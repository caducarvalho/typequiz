import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import FormReducer from '../reducers/FormReducer';

const initialValue = {
  name: '',
};

const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FormReducer, initialValue);

  const handleName = (name) => dispatch({ type: 'CHANGE_NAME', name });

  const { name } = state;

  return (
    <FormContext.Provider value={{ name, handleName }}>
      {children}
    </FormContext.Provider>
  );
};

FormProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormContext;

export {
  FormProvider,
};
