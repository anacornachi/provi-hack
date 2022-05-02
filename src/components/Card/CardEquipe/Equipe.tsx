import { Flex, Image } from "@chakra-ui/react";
import CardEquipe from "./CardEquipe";
import TagEquipe from "./TagEquipe";
import henrique from "@public/assets/images/henrique.jpg";
import ana from "@public/assets/images/ana.png";
import carolly from "@public/assets/images/carolly.jpg";
import denise from "@public/assets/images/denise.jpg";
import suellen from "@public/assets/images/suellen.jpg";
import bruno from "@public/assets/images/bruno.jpg";
import helena from "@public/assets/images/helena.jpg";
import Container from "@components/layouts/Container";

export default function Equipe(){
    return(
        <Container>
            <Flex
            h={'auto'}
            direction={{base:"column", md:"row", lg:"row"}}
            justify={{base:"center", sm:"center", md:'space-evenly'}}
            flexWrap={{base:"nowrap", md:"wrap"}}
            gap={{base:"10px", md:"20px"}} >
            <TagEquipe />
            <CardEquipe image={henrique} nome="Henrique Ferraz" funcao=" Frontend"/>
            <CardEquipe image={ana} nome="Ana Cornachi" funcao=" Frontend"/>
            <CardEquipe image={carolly} nome="Carolly Barbosa" funcao=" Frontend"/>
            <CardEquipe image={denise} nome="Denise Oliveira" funcao=" Frontend"/>
            <CardEquipe image={suellen} nome="Suellen Souza" funcao="Design UX/UI"/>
            <CardEquipe image={bruno} nome="Bruno Andreotti" funcao=" Backend"/>
            <CardEquipe image={helena} nome="Helena Machado" funcao=" Backend"/>        
        </Flex>
        </Container>
        
    )
}