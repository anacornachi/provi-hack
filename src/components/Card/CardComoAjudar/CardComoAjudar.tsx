import { Box, Image, Text, Flex } from "@chakra-ui/react";

type Props = {
    imagem: string;
    texto: string;
}

export default function CardComoAjudar({imagem, texto}: Props) {
    return (
        <Flex 
        w="30%" 
        h="500px" 
        bg="#C5C768" 
        borderRadius="1em"
        border="3px solid #53882A"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-around"
        >
            <Flex 
            h="60%" 
            w="100%"
            alignItems="center"
            justifyContent="center"
             >
                <Image  src={imagem}/>
            </Flex>
            
            <Flex
            h="10%"
            w="100%"
            alignItems="center"
            justifyContent="center"
            >
                <Text>{texto}</Text>
            </Flex>
        </Flex>
    )
}


