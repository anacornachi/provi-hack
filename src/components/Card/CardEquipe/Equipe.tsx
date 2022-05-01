import { Flex, Image } from "@chakra-ui/react";
import CardEquipe from "./CardEquipe";

export default function Equipe(){
    return(
        <Flex
        w={{base:"75%",sm:"60%", md:"95%"}}
        h="600px"
        flexDirection={{base:"column", md:"row", lg:"row"}}
        justifyContent={{base:"center", sm:"center", md:"space-around"}}
        ml={{base:"10%", md:"5"}}
        flexWrap={{base:"nowrap", md:"wrap"}}
        gap={{base:"3%", md:"5%"}} >
            <CardEquipe nome="Henrique Ferraz" funcao=" Frontend"/>
            <CardEquipe  nome="Ana Cornachi" funcao=" Frontend"/>
            <CardEquipe  nome="Carolly" funcao=" Frontend"/>
            <CardEquipe nome="Denise OLiveira" funcao=" Frontend"/>
            <CardEquipe nome="Suellen Souza" funcao="Design UX/UI"/>
            <CardEquipe nome="Bruno Andreotti" funcao=" Backend"/>
            <CardEquipe nome="Helena" funcao=" Backend"/>        
        </Flex>
    )
}