import {Link as ChakraLink, Flex} from '@chakra-ui/react';
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

  return (
    <Flex bg={'background'}>
      <Container maxH={'203px'} p={'1em'}>
        <Flex fontFamily={'heading'} justify={'space-between'} align={'center'}>
          {navigationHeader &&
            navigationHeader.map((navigation: any, key: any) =>
              key === 3 ? (
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
          {isAuthenticated ? (
            <>
              <ChakraLink>OLÁ, {session?.user}</ChakraLink>
              <ChakraLink onClick={async () => await signOut()}>
                LOGOUT
              </ChakraLink>
            </>
          ) : (
            <>
              <ChakraLink
                _hover={{
                  border: 'none',
                  color: 'description',
                }}
              >
                CADASTRO
              </ChakraLink>
              <ChakraLink
                _hover={{
                  border: 'none',
                  color: 'description',
                }}
              >
                LOGIN
              </ChakraLink>
            </>
          )}
        </Flex>
      </Container>
    </Flex>
  );
}

export default Header;
