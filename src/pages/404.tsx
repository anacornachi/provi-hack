import {Box,Text} from '@chakra-ui/react';
import Container from '@components/layouts/Container';

function NotFound() {
    return (
        <Box
        bgImage="url('assets/images/feira.png')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        w="100vw"
        h="fit-content"
        minH="100vh"
        >
        <Box bg="rgba(197,199,104,0.4)" h="100%" minH="100vh" w="100%">
            <Container
            d="flex"
            py="90px"
            alignItems="center"
            justifyContent="center"
            gap="50px"
            flexDirection={{base: 'column', md: 'row'}}
            >
                <Text
                fontSize='60px'
                color='description'
                >
                    Ops! Essa página não existe
                </Text>
            </Container>
        </Box>
    </Box>
    );
}

export default NotFound;