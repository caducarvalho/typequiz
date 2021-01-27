import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Widget from '../Widget';
import FormContext from '../../contexts/FormContext';

const Result = ({
  returnToStart,
  resetQuiz,
}) => {
  const { name, score } = useContext(FormContext);

  const getMessage = (r) => {
    let rate = 0;

    if (r > 14) {
      rate = 5;
    } else if (r > 11) {
      rate = 4;
    } else if (r > 8) {
      rate = 3;
    } else if (r > 5) {
      rate = 2;
    } else if (r > 2) {
      rate = 1;
    }

    switch (rate) {
      case 5: return 'Você sabe tudo sobre tipografia e o universo das fontes! Parabéns! =D';
      case 4: return 'Você mandou bem, mas ainda pode aprender mais e melhorar o uso das fontes no dia-a-dia. ;)';
      case 3: return 'Você ainda pode aprender mais sobre fontes, mas está no caminho certo. :)';
      case 1: return 'Você sabe algumas coisas, tem um senso mais apurado para as letras, mas pode ser ainda melhor. :)';
      case 2: return 'Você sabe uma coisa ou outra, mas ainda tem um longo caminho a percorrer. :)';
      default: return 'Parece que você ainda não tem muita intimidade com o universo das fontes. Isso é normal, mas aprender tipografia pode ser mais útil do que você imagina. :D';
    }
  };

  return (
    <Widget>
      <Widget.Header>
        Pontuação final:
        {' '}
        {score}
      </Widget.Header>

      <Widget.Content>
        <p>
          {name}
          , você acertou
          {' '}
          {score === 1 ? 'uma questão' : `${score} questões`}
          .
          {' '}
          {getMessage(score)}
        </p>

        <Widget.Links>
          <li>
            <Button type="button" onClick={returnToStart}>Tentar de novo</Button>
          </li>
          <li>
            <Button type="button" onClick={resetQuiz}>Voltar ao início</Button>
          </li>
        </Widget.Links>
      </Widget.Content>
    </Widget>
  );
};

Result.propTypes = {
  resetQuiz: PropTypes.func.isRequired,
  returnToStart: PropTypes.func.isRequired,
};

export default Result;
