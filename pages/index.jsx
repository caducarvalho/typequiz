import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import Projects from '../src/components/Projects';
import QuizLogo from '../src/components/QuizLogo';
import QuizContainer from '../src/components/QuizContainer';
import QuizBackground from '../src/components/QuizBackground';
import GitHubCorner from '../src/components/GitHubCorner';
import FormContext from '../src/contexts/FormContext';
import db from '../db.json';

const Home = ({ projs }) => {
  const router = useRouter();
  const { name, handleName } = useContext(FormContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    router.push(`/quiz?name=${name}`);
  };

  return (
    <QuizBackground>
      <QuizLogo />

      <QuizContainer>
        <Widget>
          <Widget.Header>{db.title}</Widget.Header>

          <Widget.Content>
            <p>{db.description}</p>

            <form onSubmit={handleSubmit}>
              <Input
                type="text"
                label="Digite seu nome"
                value={name}
                onChange={({ target }) => handleName(target.value)}
                placeholder="Seu nome aqui"
              />
              <Button type="submit" disabled={name === ''}>Começar</Button>
            </form>

          </Widget.Content>
        </Widget>

        <Projects projs={projs} />
        <Footer />
      </QuizContainer>

      <GitHubCorner projectUrl="https://github.com/caducarvalho/typequiz" />
    </QuizBackground>
  );
};

Home.defaultProps = {
  projs: {},
};

Home.propTypes = {
  projs: PropTypes.objectOf(PropTypes.shape),
};

export async function getStaticProps() {
  const projsInitial = await fetch('https://api.github.com/search/repositories?q=topic:aluraquiz&sort=updated&per_page=5', {
    method: 'GET',
    headers: {
      Accept: 'application/vnd.github.v3+json',
    },
  });

  const projs = await projsInitial.json();

  return { props: { projs } };
}

export default Home;
