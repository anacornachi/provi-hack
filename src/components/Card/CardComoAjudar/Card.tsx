import { Flex } from "@chakra-ui/react";
import Cards from "./Cards";


export default function Card(){
    return(
        <Flex
        w="100%"
        h="400px"
        justifyContent="center"
        >
            <Cards />
        </Flex>
    )
}