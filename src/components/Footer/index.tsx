import { 
    Flex, 
    Heading,
    Link as ChakraLink,
    Text
} from "@chakra-ui/react"
import Link from "next/link"
import Container from "@components/layouts/Container";
import destaques from "./navigationDestaques";
import quemSomos from "./navigationQuemSomos";
import comoAjudar from "./navigationComoAjudar";
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa"

function Footer() {
    return (
        <Flex
        bg={'background'}
        direction={'column'}>
            <Container>
            <Flex
            m={'100px auto'}
            justify={'space-between'}
            >
                <Flex
                direction={'column'}
                gap={'30px'}
                color={'description'}
                >
                    <Heading
                    color={'title'}
                    fontSize={'24px'}
                    mb={'22px'}
                    >DESTAQUES</Heading>
                    {destaques && destaques.map((navigation, key) => (
                        <Link href={navigation.link} passHref key={key}>
                            <ChakraLink
                            _hover={{
                                border: 'none',
                                color: 'title'}}
                                >{navigation.label}</ChakraLink>
                        </Link>
                    ))}
                </Flex>
                <Flex
                direction={'column'}
                gap={'30px'}
                color={'description'}>
                    <Heading
                    color={'title'}
                    fontSize={'24px'}
                    mb={'22px'}
                    >QUEM SOMOS</Heading>
                    {quemSomos && quemSomos.map((navigation, key) => (
                        <Link href={navigation.link} passHref key={key}>
                            <ChakraLink
                            _hover={{
                                border: 'none',
                                color: 'title'}}
                                >{navigation.label}</ChakraLink>
                        </Link>
                    ))}
                </Flex>

                <Flex
                direction={'column'}
                gap={'30px'}
                color={'description'}
                >
                    <Heading
                    color={'title'}
                    fontSize={'24px'}
                    mb={'22px'}
                    >COMO AJUDAR</Heading>
                    {comoAjudar && comoAjudar.map((navigation, key) => (
                        <Link href={navigation.link} passHref key={key}>
                            <ChakraLink
                            _hover={{
                                border: 'none',
                                color: 'title'}}
                                >{navigation.label}</ChakraLink>
                        </Link>
                    ))}
                </Flex>

            </Flex>
        </Container>
        <Container>
            <Flex
            justify={'space-between'}
            mb={'50px'}>
                <Flex
                color={'description'}
                w={'10%'}
                justify={'space-between'}>
                    <FaLinkedinIn size={'2em'} />
                    <FaInstagram size={'2em'} />
                    <FaWhatsapp size={'2em'} />
                </Flex>
                <Flex
                w={'60%'}
                justify={'space-between'}>
                    <Text
                    color={'title'}>POLÍTICA DE PRIVACIDADE</Text>
                    <Text
                    color={'description'}>
                        |
                    </Text>
                    <Text
                    color={'title'}>
                        TERMOS DE USO
                    </Text>
                    <Text
                    color={'description'}>
                        |
                    </Text>
                    <Text
                    color={'title'}>
                        ENTRE EM CONTATO
                    </Text>
                </Flex>
            </Flex>
        </Container>
            <Flex
            h={'62px'}
            bg={'description'}
            color={'white'}
            justify={'center'}
            align={'center'}>
                <Text>
                Circula Food, é uma associação sem fins lucrativos que, 
                nos termos da legislação tributária brasileira, 
                goza de isenção com relação aos tributos federais devidos sobre suas receitas próprias.
                </Text>
            </Flex>
        </Flex>
    );
}

export default Footer;