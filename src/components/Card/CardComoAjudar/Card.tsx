
import { Flex } from "@chakra-ui/react";
import CardComoAjudar from "./CardComoAjudar";

export default function Card(){
    return (
      <Flex 
      flexDirection={{base:"column", md:"row", lg:"row"}}
      justifyContent="space-between"
      >
          <CardComoAjudar title="DOANDO"/>
          <CardComoAjudar title="DIVULGANDO"/>
          <CardComoAjudar title="TRABALHANDO" />
      </Flex>
    )
}