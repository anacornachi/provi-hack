import { Flex, Image } from "@chakra-ui/react";
import CardEquipe from "./CardEquipe";
import TagEquipe from "./TagEquipe";
import henrique from "@public/image/henrique.jpg"

export default function Equipe(){
    return(
        <Flex
        h={{base:"2000px", md:"600px"}} //mudar quando atribuir a HOME e tornar reponsivo
        flexDirection={{base:"column", md:"row", lg:"row"}}
        justifyContent={{base:"center", sm:"center", md:"space-around"}}
        ml={{base:"10%", md:"5"}}
        flexWrap={{base:"nowrap", md:"wrap"}}
        gap={{base:"1%", md:"2%"}} >
            <TagEquipe />
            <CardEquipe image={henrique} nome="Henrique Ferraz" funcao=" Frontend"/>
            <CardEquipe image={henrique} nome="Ana Cornachi" funcao=" Frontend"/>
            <CardEquipe image={henrique} nome="Carolly" funcao=" Frontend"/>
            <CardEquipe image={henrique} nome="Denise OLiveira" funcao=" Frontend"/>
            <CardEquipe image={henrique} nome="Suellen Souza" funcao="Design UX/UI"/>
            <CardEquipe image={henrique} nome="Bruno Andreotti" funcao=" Backend"/>
            <CardEquipe image={henrique} nome="Helena" funcao=" Backend"/>        
        </Flex>
    )
}