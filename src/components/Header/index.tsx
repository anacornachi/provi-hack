import {Link as ChakraLink, Flex, Text} from '@chakra-ui/react';
import Link from 'next/link';
import Container from '@components/layouts/Container';
import Image from 'next/image';
import navigationHeader from './navigationHeader';
import logo from '@public/assets/images/logo.png';
import {useState} from 'react';
import {signOut, useSession} from 'next-auth/react';
import {useRouter} from 'next/router';

function Header() {
  const {data: session, status} = useSession();
  const isAuthenticated = status === 'authenticated';
  const [ isAuth, setAuth ] = useState(false)

  return (
    <Flex bg={'background'}>
      <Container maxH={'203px'} p={'1em'}>
        <Flex fontFamily={'heading'} justify={'space-between'} align={'center'}>
          {navigationHeader &&
            navigationHeader.map((navigation: any, key: any) =>
              key === 2 ? (
                <ChakraLink href={navigation.link} key={key}>
                  <Image src={logo} alt={'logo'} />
                </ChakraLink>
              ) : (
                <Link href={navigation.link} passHref key={key}>
                  <ChakraLink
                    _hover={{
                      border: 'none',
                      color: 'description',
                    }}
                  >
                    {navigation.label}
                  </ChakraLink>
                </Link>
              ),
            )}
          {isAuth ? (
            <>
              <Text> OLÁ, 
                
                </Text>
              <ChakraLink onClick={async () => await signOut()}>
                LOGOUT
              </ChakraLink>
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
