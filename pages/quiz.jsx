import React, { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import Input from '../src/components/Input';
// import Button from '../src/components/Button'
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import QuizLogo from '../src/components/QuizLogo';
import QuizContainer from '../src/components/QuizContainer';
import QuizBackground from '../src/components/QuizBackground';
import GitHubCorner from '../src/components/GitHubCorner';
import FormContext from '../src/contexts/FormContext';
import db from '../db.json';

const QuizPage = () => {
  const { query } = useRouter();
  const { name } = useContext(FormContext);
  const [answer, handleAnswer] = useState('');

  return (
    <QuizBackground>
      <QuizLogo />

      <QuizContainer>
        <Widget>
          <Widget.Header>{db.title}</Widget.Header>

          <Widget.Content>
            <p>
              Olá,
              {' '}
              {name}
              . Não tem nada aqui por enquanto, mas divirta-se com esse input logo abaixo.
              {' '}
              Aliás, seu nome é
              {' '}
              {query.name}
              {' '}
              mesmo, né? ;)
            </p>

            <Input
              value={answer}
              onChange={({ target }) => handleAnswer(target.value)}
              placeholder="Por enquanto não tem nada aqui mesmo"
            />
          </Widget.Content>
        </Widget>

        <Footer />
      </QuizContainer>

      <GitHubCorner projectUrl="https://github.com/caducarvalho/typequiz" />
    </QuizBackground>
  );
};

export default QuizPage;
