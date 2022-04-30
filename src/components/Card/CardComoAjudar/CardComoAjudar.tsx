import { Box, Image, Text } from "@chakra-ui/react";

type Props = {
    imagem: string;
    texto: string;
}

export default function CardComoAjudar({imagem, texto}: Props){
    return(
        <Box>
            <Image src={imagem}/>
            <Text>{texto}</Text>
        </Box>
    )
}