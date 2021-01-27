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

  hr {
    border: none;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    height: 0;
    margin: 20px 0;
  }

  img {
    display: block;
    width: 100%;
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

Widget.Alternatives = styled.ul`
  display: grid;
  grid-template: auto / repeat(2, 1fr);
  grid-gap: 20px;
  list-style: none;
  margin: 0 0 20px;
  padding: 0;
`;

Widget.Progress = styled.p`
  margin: 20px 0;
  padding: 0;
  font-size: 0.85rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`;

Widget.Description = styled.p`
  margin: 20px 0;
  padding: 0;
  font-size: 1rem;
  line-height: 1.4rem;
`;

Widget.Links = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  li {
    margin-top: 20px;
  }
`;

export default Widget;
