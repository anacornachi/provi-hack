import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import Image, {StaticImageData} from "next/image";

type Props = {
    image:StaticImageData;
    nome:string;
    funcao:string;
}
export default function CardEquipe({image, nome, funcao}:Props){
    return(
        <Flex
        w='320px'
        h='380px' 
        flexDirection="column"
        justify={'space-between'}
        align={'center'}
        >
            <Flex
            w='220px'
            h='280px'
            bg="#C5C768" 
            borderRadius="1em"
            overflow="hidden"
            boxShadow={'lg'}
            >
                <Image
                alt={nome}
                src={image}
                objectFit={'cover'}
                />
            </Flex>
            <Text
            textAlign={'center'}
            fontWeight={'bold'}>
                {nome} <Spacer/> {funcao}
            </Text> 
        </Flex>
    )
}