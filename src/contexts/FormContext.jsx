import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import FormReducer from '../reducers/FormReducer';

const initialValue = {
  name: '',
  score: 0,
};

const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FormReducer, initialValue);

  const handleName = (name) => dispatch({ type: 'CHANGE_NAME', name });

  const resetScore = () => dispatch({ type: 'RESET_SCORE' });
  const incrementScore = () => dispatch({ type: 'INCREMENT_SCORE' });

  const resetQuiz = () => dispatch({ type: 'RESET_QUIZ', info: initialValue });

  const { name, score } = state;

  return (
    <FormContext.Provider value={{
      name,
      score,
      handleName,
      resetScore,
      incrementScore,
      resetQuiz,
    }}
    >
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
