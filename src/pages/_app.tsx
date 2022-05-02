import type {AppProps} from 'next/app';
import {ChakraProvider} from '@chakra-ui/react';
import theme from '../theme';
import Header from '@components/Header';
import Footer from '@components/Footer';
<<<<<<< HEAD
=======
import {SessionProvider} from 'next-auth/react';
>>>>>>> cf360575d160bda2b56dbd4a9c30a64d0d6b33ee

function MyApp({Component, pageProps: {session, ...pageProps}}: AppProps) {
  return (
<<<<<<< HEAD
    <ChakraProvider resetCSS theme={theme}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
=======
    <SessionProvider session={session}>
      <ChakraProvider resetCSS theme={theme}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </SessionProvider>
>>>>>>> cf360575d160bda2b56dbd4a9c30a64d0d6b33ee
  );
}

export default MyApp;
