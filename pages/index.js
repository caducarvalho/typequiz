import styled from 'styled-components'
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import db from '../db.json';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;

  @media screen and (max-width: 499px) {
    margin: auto;
    padding: 15px;
  }
`;

const Home = () => (
  <QuizBackground>
    <QuizContainer>
      <Widget>
        <Widget.Header>
          <h1>{db.title}</h1>
        </Widget.Header>

        <Widget.Content>
          <p>{db.description}</p>
        </Widget.Content>
      </Widget>
      
      <Widget>
        <Widget.Content>
          <h1>Quizes da galera</h1>
          <p>Veja outros quizes para testar seus conhecimentos em outros assuntos</p>
        </Widget.Content>
      </Widget>
      <Footer />
    </QuizContainer>

    <GitHubCorner />
  </QuizBackground>
);

export default Home;