import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import logoEquipe from "@public/image/logoEquipe.png"

export default function TagEquipe(){
    return(
        <Flex 
        w={{base:"100%", sm:"90%", md:"25%", lg:"25%"}}
        h="100%"
        position="relative"
        objectFit="fill"
        overflow="hidden"
            >
            <Image 
            src={logoEquipe} 
            layout="fill"
            />
        </Flex>
    )
} 