import { Box, Image, Text, Flex } from "@chakra-ui/react";

type Props = {
    imagem?: string;
    title: string;
}

export default function CardComoAjudar({imagem, title}: Props) {
    return (
        <Flex 
        w={{base:"80%", sm:"40%", md:"20%"}} 
        h={{base:"25%", sm:"40%", md:"80%"}} 
        bg="#C5C768" 
        borderRadius="1em"
        border="3px solid #53882A"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-around"
        >
            <Flex 
            h="60%" 
            w="80%"
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
                <Text>{title}</Text>
            </Flex>
        </Flex>
    )
}


