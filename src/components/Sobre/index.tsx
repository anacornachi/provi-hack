import { Flex, Text } from "@chakra-ui/react"
import Tag from "@components/Tag";

function Sobre() {
    return (
        <Flex
        direction={'column'}
        align={'center'}
        px={'200px'}
        gap={'20px'}
        marginBottom={'130px'}
        >
            <Tag>
                SOBRE O PROJETO
            </Tag>
            <Flex
            p={'70px'}
            borderRadius={'12px'}
            bg={'title'}>
                <Text
                fontWeight={'bold'}
                textAlign={'center'} >
                Com a alta demanda de alimentos prevista para as próximas décadas e a inviabilidade de aumentar ainda mais o desmatamento de terras
                para a agricultura, o planeta terra se encontra em um impasse. Ao mesmo tempo, estudos do World Resources Institute (2018) apontam
                que 28% da comida produzida na América Latina é desperdiçada, e o Brasil se encontra no ranking dos países que mais desperdiçam alimentos.
                Como a tecnologia pode ajudar a diminuir o nível de desperdício de comida e, assim, mitigar o desmatamento? 
                <br /><br />
                O CirculaFood nasce com a ideia de unir instituições que podem doar alimentos com instituições que desejam receber e distribuir.
                Restaurantes e hotéis que não utilizam todo o seu estoque podem se inscrever como doadores, e ONGs destinam alimentos de qualidade
                que outrora seriam desperdiçados.
                Satisfação para empresários, colaboradores, clientes e meio ambiente. Para toda uma sociedade que deseja e quer mudanças.
            </Text>
            </Flex>
        </Flex>
    );
}

export default Sobre;