import { Flex } from "@chakra-ui/react";
import CardComoAjudar from "./CardComoAjudar";
import doando from "@public/image/doando.jpg"
import divulgando from "@public/image/divulgando.jpg"
import trabalhando from "@public/image/trabalhando.jpg"
export default function Cards(){
    return (
      <Flex 
      w="70%"
      flexDirection={{base:"column", md:"row", lg:"row"}}
      justifyContent="space-between"
      >
          <CardComoAjudar image={doando} title="DOANDO"/>
          <CardComoAjudar image={divulgando} title="DIVULGANDO"/>
          <CardComoAjudar image={trabalhando} title="TRABALHANDO" />
      </Flex>
    )
}