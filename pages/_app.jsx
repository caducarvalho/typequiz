/* eslint-disable react/prop-types */
import React from 'react';
import Head from 'next/head';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import db from '../db.json';
import { FormProvider } from '../src/contexts/FormContext';
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
    color: ${({ theme }) => theme.colors.text};
  }

  html, body {
    min-height: 100vh;
  }

  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const App = ({ Component, pageProps }) => (
  <ThemeProvider theme={db.theme}>
    <Head>
      <title>Type Quiz</title>
      <meta name="title" content="Type Quiz" />
      <meta name="description" content="Um quiz sobre tipografia desenvolvido na Imersão React da Alura. Você acha que sabe sobre tipografia? Que tal testar seus conhecimentos sobre letras, fontes e o universo dos tipos?" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://typequiz.caducarvalho.vercel.app/" />
      <meta property="og:title" content="Type Quiz" />
      <meta property="og:description" content="Um quiz sobre tipografia desenvolvido na Imersão React da Alura. Você acha que sabe sobre tipografia? Que tal testar seus conhecimentos sobre letras, fontes e o universo dos tipos?" />
      <meta property="og:image" content="/card.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://typequiz.caducarvalho.vercel.app/" />
      <meta property="twitter:title" content="Type Quiz" />
      <meta property="twitter:description" content="Um quiz sobre tipografia desenvolvido na Imersão React da Alura. Você acha que sabe sobre tipografia? Que tal testar seus conhecimentos sobre letras, fontes e o universo dos tipos?" />
      <meta property="twitter:image" content="/card.png" />

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>

    <GlobalStyle />
    <FormProvider>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </FormProvider>
  </ThemeProvider>
);

export default App;
