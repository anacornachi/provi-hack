import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import logoEquipe from "@public/assets/images/logoEquipe.png"

export default function TagEquipe(){
    return(
        <Flex 
        w='320px'
        h='380px'
        overflow="hidden"
            >
            <Image
            src={logoEquipe}
            alt={'imagem equipe'}
            objectFit={'contain'}
            />
        </Flex>
    )
} 