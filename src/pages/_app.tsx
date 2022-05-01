import type {AppProps} from 'next/app';
import {ChakraProvider} from '@chakra-ui/react';
import theme from '../theme';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Equipe from '@components/Card/CardEquipe/Equipe';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Header />
      <Component {...pageProps} />
      <Equipe />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
