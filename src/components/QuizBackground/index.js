import styled from 'styled-components';

const QuizBackground = styled.div`
  background: ${({theme}) => theme.colors.mainBg} url('./back.svg') repeat center center;
  height: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default QuizBackground;