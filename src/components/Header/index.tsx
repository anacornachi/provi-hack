import {
    Link as ChakraLink,
    Flex
} from "@chakra-ui/react"
import Link from 'next/link'
import Container from "@components/layouts/Container";
import Image from 'next/image';
import navigationHeader from "./navigationHeader";
import logo from "@public/assets/images/logo.png";
import { useState } from "react"

function Header() {
    const [ isAuth, setAuth ] = useState(false)
    return (
        <Flex
        bg={'background'}
        >
            <Container
            maxH={'203px'}
            p={'1em'}
            >
            <Flex
            fontFamily={'heading'}
            justify={'space-between'}
            align={'center'}
            >
                {navigationHeader && navigationHeader.map((navigation: any, key: any) => (
                    key === 2 ? 
                    <ChakraLink href={navigation.link} key={key}>
                        <Image src={logo} alt={'logo'} />
                    </ChakraLink> 
                    : 
                    <Link href={navigation.link} passHref key={key}>
                    <ChakraLink
                    _hover={{
                        border: 'none',
                        color: 'description'}}
                    >
                        {navigation.label}
                    </ChakraLink>
                </Link>
                ))}
                {isAuth ? (
                    <>
                        <ChakraLink
                        >OLÁ, X</ChakraLink>
                        <ChakraLink
                        >LOGOUT</ChakraLink>
                    </>
                ) : (
                    <>
                    <Link href={'/cadastro'} passHref >
                        <ChakraLink
                        _hover={{
                            border: 'none',
                            color: 'description'}}
                            >
                            CADASTRO
                        </ChakraLink>
                    </Link>
                    <Link href={'/login'} passHref >
                        <ChakraLink
                            _hover={{
                                border: 'none',
                                color: 'description'}}
                            >
                                LOGIN
                            </ChakraLink>
                    </Link>
                    </>
                )}
            </Flex>
        </Container>
        </Flex>
    );
}

export default Header;