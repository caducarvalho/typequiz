import Head from 'next/head';
import {createGlobalStyle, ThemeProvider} from 'styled-components'
import db from '../db.json';
import '../src/fonts/fonts.css';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Work Sans', sans-serif;
    // Deixa branco no começo
    color: ${({theme}) => theme.colors.text};
  }

  html, body {
    min-height: 100vh;
  }

  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={db.theme}>
      <Head>
        <title>Type Quiz</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" href="./favicon.ico" type="image/x-icon"></link>
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;