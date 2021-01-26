import styled from 'styled-components';

const Widget = styled.div`
  margin: 10px auto 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.altBg};
  overflow: hidden;
  width: 100%;

  h2, h3 {
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.2rem;
    margin-bottom: 0;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.2rem;
  }

  hr {
    border: none;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    height: 0;
    margin: 20px 0;
  }
`;

Widget.Header = styled.h1`
  text-align: center;
  font-size: 1.2rem;
  font-weight: 300;
  letter-spacing: 4px;
  text-transform: uppercase;
  padding: 18px 32px;
  background: ${({ theme }) => theme.colors.secondary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  margin: 0;
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;

  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

export default Widget;
