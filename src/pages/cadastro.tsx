import {Box, Flex} from '@chakra-ui/react';
import CreateDoneeForm from '@components/Forms/CreateDoneeForm';
import CreateDonorForm from '@components/Forms/CreateDonorForm';
import Container from '@components/layouts/Container';

export default function Cadastro() {
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
      <Box bg="rgba(197,199,104,0.4)" h="100%" w="100%">
        <Container
          d="flex"
          py="90px"
          justifyContent="center"
          h="100%"
          gap="50px"
          flexDirection={{base: 'column', md: 'row'}}
        >
          <CreateDonorForm />
          <CreateDoneeForm />
        </Container>
      </Box>
    </Box>
  );
}
