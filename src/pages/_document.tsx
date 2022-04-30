import {ColorModeScript} from '@chakra-ui/react';
import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
    render() {
    return (
        <Html lang="pt-BR">
        <Head />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link 
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&family=Poppins:wght@600&family=Water+Brush&display=swap" 
        rel="stylesheet"

        />
        <meta
            name="description"
            content="Projeto desenvolvido para o ProviHack - Equipe 4"
        />
        <title>CirculaFOOD</title>

        <body>
            <ColorModeScript />
            <Main />
            <NextScript />
        </body>
        </Html>
    );
    }
}

export default MyDocument;