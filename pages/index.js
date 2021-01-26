import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import QuizLogo from '../src/components/QuizLogo';
import QuizContainer from '../src/components/QuizContainer';
import QuizBackground from '../src/components/QuizBackground';
import GitHubCorner from '../src/components/GitHubCorner';
import db from '../db.json';

const Home = () => (
  <QuizBackground>
    <QuizLogo />

    <QuizContainer>
      <Widget>
        <Widget.Header>{db.title}</Widget.Header>

        <Widget.Content>
          <p>{db.description}</p>

          <hr/>

          <p>Em breve...</p>
        </Widget.Content>
      </Widget>
      
      <Widget>
        <Widget.Content>
          <h2>Quizes da galera</h2>
          <p>Veja outros quizes para testar seus conhecimentos em outros assuntos</p>

          <hr/>

          <p>Em breve...</p>
        </Widget.Content>
      </Widget>
      <Footer />
    </QuizContainer>

    <GitHubCorner projectUrl="https://github.com/caducarvalho/typequiz" />
  </QuizBackground>
);

export default Home;