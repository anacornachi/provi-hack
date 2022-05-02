import {
  Button,
  Flex,
  Link,
  SimpleGrid,
  Text,
  useToast,
  Heading,
} from '@chakra-ui/react';
import CustomInput from '@components/CustomInput';
import {signIn} from 'next-auth/react';
import {useRouter} from 'next/router';
import {FormProvider, useForm} from 'react-hook-form';
import CustomCheckbox from '@components/CustomCheckbox';
import {loginResolver} from './resolvers/loginResolver';

export default function LoginDonorForm() {
  const router = useRouter();
  const toast = useToast();
  const methods = useForm({resolver: loginResolver, mode: 'onChange'});

  const onSubmit = async (data: any) => {
    const auth = (await signIn('credentials', {
      redirect: false,
      ...data,
      role: 'donor',
    })) as any;
    if (auth?.error) {
      // Handle auth failed
      console.log('auth failed', auth.error);
      toast({
        title: 'Falha ao autenticar.',
        description: 'Verifique os dados e tente novamente',
        status: 'error',
        position: 'bottom-end',
      });
    } else {
      toast({
        status: 'success',
        title: 'Bem vindo',
        position: 'bottom-right',
        duration: 4000,
        isClosable: true,
      });
      router.push('/');
    }
  };

  const onError = () => {
    toast({
      status: 'error',
      title: 'Falha ao autenticar. Verifique os dados e tente novamente.',
      position: 'bottom-right',
      duration: 4000,
      isClosable: true,
    });
    methods.reset();
  };

  return (
    <Flex
      borderRadius="12px"
      bg="white"
      gap="40px"
      h="fit-content"
      direction="column"
      border="3px solid #53882A"
      w={{base: '100%', md: '50%'}}
      align="center"
      p={{base: '15px', md: '55px'}}
    >
      <Heading as="h2" fontSize="25px" color="description" fontWeight="bold">
        LOGIN DO DOADOR
      </Heading>
      <SimpleGrid
        columns={1}
        spacing="20px"
        w="100%"
        as="form"
        onSubmit={methods.handleSubmit(onSubmit, onError)}
      >
        <FormProvider {...methods}>
          <CustomInput
            name="email"
            placeholder="digite aqui..."
            title="Email:"
          />
          <CustomInput
            name="password"
            placeholder="digite aqui..."
            title="Senha:"
            type="password"
          />
          <Flex justify="space-between" align="center">
            <CustomCheckbox
              name="stayLogged"
              label="Lembrar login"
              w="50%"
              color="#53882A"
              fontWeight="bold"
            />
            <Link href="/" color="#53882A" fontWeight="bold">
              Esqueci a senha
            </Link>
          </Flex>
          <Button
            w="100%"
            h="51px"
            pt="0"
            bg="description"
            color="white"
            _hover={{bg: 'description'}}
            type="submit"
            isDisabled={!methods.formState.isValid}
          >
            Entrar
          </Button>
        </FormProvider>
        <Text justifySelf="center" color="title" fontWeight="bold">
          Não possui conta?<Link color="description"> Cadastre-se</Link>
        </Text>
      </SimpleGrid>
    </Flex>
  );
}
