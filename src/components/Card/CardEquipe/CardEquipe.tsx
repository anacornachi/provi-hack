import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import Image, {StaticImageData} from "next/image";


type Props = {
    // image?:StaticImageData;
    nome:string;
    funcao:string;
}
export default function CardEquipe({nome, funcao}:Props){
    return(
        <Flex
        w={{base:"100%", sm:"90%", md:"25%", lg:"20%"}} 
        h={{base:"35%", sm:"46%", md:"90%"}} 
        flexDirection="column"
        alignItems="space-around"
        justifyContent="center"
        >
            <Flex
            w="100%" 
            h={{base:"25%", sm:"40%", md:"80%"}} 
            bg="#C5C768" 
            borderRadius="1em"
            >
                {/* <Image 
                id="imagem"
                src}
                alt={nome}
                /> */}
            </Flex>
            <Flex>
                <Text>
                     {nome} <Spacer/> {funcao}
                </Text> 
             </Flex>
        </Flex>
    )
}