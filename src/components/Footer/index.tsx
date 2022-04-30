import { 
    Flex, 
    Heading,
    Link as ChakraLink,
} from "@chakra-ui/react"
import Link from "next/link"
import Container from "@components/layouts/Container";
import destaques from "./navigationDestaques";
import quemSomos from "./navigationQuemSomos";
import comoAjudar from "./navigationComoAjudar";

function Footer() {
    return (
        <Container>
            <Flex
            m={'100px auto'}
            justify={'space-between'}>
                <Flex
                direction={'column'}
                gap={'30px'}>
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
                                color: 'description'}}
                                >{navigation.label}</ChakraLink>
                        </Link>
                    ))}
                </Flex>
                <Flex
                direction={'column'}
                gap={'30px'}>
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
                                color: 'description'}}
                                >{navigation.label}</ChakraLink>
                        </Link>
                    ))}
                </Flex>

                <Flex
                direction={'column'}
                gap={'30px'}>
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
                                color: 'description'}}
                                >{navigation.label}</ChakraLink>
                        </Link>
                    ))}
                </Flex>

            </Flex>
        </Container>
    );
}

export default Footer;