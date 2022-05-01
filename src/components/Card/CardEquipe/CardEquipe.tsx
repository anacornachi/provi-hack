import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import Image from "next/image";


type Props = {
    image:any;
    nome:string;
    funcao:string;
}
export default function CardEquipe({image, nome, funcao}:Props){
    return(
        <Flex
        w={{base:"100%", sm:"50%", md:"40%", lg:"20%"}} 
        h={{base:"100%", sm:"90%", md:"90%"}} 
        flexDirection="column"
        alignItems="space-around"
        justifyContent="center"
        >
            <Flex
            h="100%"
            bg="#C5C768" 
            borderRadius="1em"
            position="relative"
            objectFit="fill"
            overflow="hidden"
            >
                <Image 
                id="imagem"
                src={image}
                alt={nome}
                layout="fill"
                />
            </Flex>
            <Flex>
                <Text>
                     {nome} <Spacer/> {funcao}
                </Text> 
             </Flex>
        </Flex>
    )
}