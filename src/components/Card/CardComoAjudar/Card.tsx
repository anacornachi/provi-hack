import { Flex } from "@chakra-ui/react";
import Cards from "./Cards";


export default function Card(){
    return(
        <Flex
        w="100%"
        h={{base:"600px", sm:"400px", md:"500px"}}
        justifyContent="center"
        >
            <Cards />
        </Flex>
    )
}