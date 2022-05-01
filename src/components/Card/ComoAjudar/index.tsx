import { Flex } from "@chakra-ui/react";
import CardComoAjudar from "./CardComoAjudar";
import doando from "@public/assets/images/doando.jpg"
import divulgando from "@public/assets/images/divulgando.jpg"
import trabalhando from "@public/assets/images/trabalhando.jpg"
import Container from "@components/layouts/Container";

export default function Cards(){
    return (
      <Container>
        <Flex margin="0 auto" p="150px" gap="20px">
          <CardComoAjudar image={doando} title="DOANDO"/>
          <CardComoAjudar image={divulgando} title="DIVULGANDO"/>
          <CardComoAjudar image={trabalhando} title="TRABALHANDO" />
        </Flex>
      </Container>
    )
}