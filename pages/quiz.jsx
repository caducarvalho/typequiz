import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import Footer from '../src/components/Footer';
import Loading from '../src/components/Loading';
import QuizLogo from '../src/components/QuizLogo';
import QuizContainer from '../src/components/QuizContainer';
import QuizBackground from '../src/components/QuizBackground';
import GitHubCorner from '../src/components/GitHubCorner';
import Question from '../src/components/Question';
import Result from '../src/components/Result';
import FormContext from '../src/contexts/FormContext';
import db from '../db.json';

const QuizPage = () => {
  const router = useRouter();
  const { resetScore, resetQuiz } = useContext(FormContext);
  const [screenState, handleScreenState] = useState('loading');
  const [questionIndex, handleQuestionIndex] = useState(0);
  const [choice, handleChoice] = useState(undefined);
  const totalQuestions = db.questions.length;
  const question = db.questions[questionIndex];

  useEffect(() => {
    if (screenState === 'loading') setTimeout(() => handleScreenState('quiz'), [2000]);
  }, [screenState]);

  const moveQuiz = () => {
    if (questionIndex + 1 < totalQuestions) {
      handleChoice(undefined);
      handleQuestionIndex(questionIndex + 1);
    } else {
      handleScreenState('result');
    }
  };

  const returnToStart = () => {
    resetScore();
    handleChoice(undefined);
    handleQuestionIndex(0);
    handleScreenState('loading');
  };

  const returnToZero = () => {
    router.push('/');
    resetQuiz();
  };

  return (
    <QuizBackground>
      <QuizLogo />

      {screenState === 'loading' && <Loading />}

      {screenState === 'quiz' && (
        <QuizContainer>
          <Question
            questions={totalQuestions}
            question={questionIndex}
            moveQuiz={moveQuiz}
            title={question.title}
            description={question.description}
            image={question.image}
            image2x={question.image2x}
            choice={choice}
            handleChoice={handleChoice}
            alternatives={question.alternatives}
            answer={question.answer}
          />
          <Footer />
        </QuizContainer>
      )}

      {screenState === 'result' && (
        <QuizContainer>
          <Result
            returnToStart={returnToStart}
            resetQuiz={returnToZero}
          />
          <Footer />
        </QuizContainer>
      )}

      <GitHubCorner projectUrl="https://github.com/caducarvalho/typequiz" />
    </QuizBackground>
  );
};

export default QuizPage;
