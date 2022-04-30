
import { Flex } from "@chakra-ui/react";
import CardComoAjudar from "./CardComoAjudar";

export default function Card(){
    return (
      <Flex 
      justifyContent="space-around">
          <CardComoAjudar/>
          <CardComoAjudar/>
          <CardComoAjudar/>
      </Flex>
    )
}