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
import {signUp} from '@services/auth';
import createUserSerializer from '../../utils/createUserSerializer';
import {signIn} from 'next-auth/react';
import {useRouter} from 'next/router';
import {FormProvider, useForm} from 'react-hook-form';
import CustomCheckbox from '@components/CustomCheckbox';
import {createDoneeResolver} from './resolvers/createDoneeResolver';

export default function CreateDoneeForm() {
  const router = useRouter();
  const toast = useToast();
  const methods = useForm({resolver: createDoneeResolver, mode: 'onChange'});

  const onSubmit = async (data: any) => {
    // const serializedData = createUserSerializer(data);
    // const {email, password} = serializedData;
    // try {
    //   await signUp(serializedData, 'client');
    //   router.push('/');
    //   await signIn('credentials', {
    //     redirect: false,
    //     ...{email, password},
    //   });
    //   toast({
    //     status: 'success',
    //     title: 'Conta criada com sucesso!',
    //     position: 'bottom-right',
    //     duration: 4000,
    //     isClosable: true,
    //   });
    // } catch (error) {
    //   onError();
    // }
  };

  const onError = () => {
    toast({
      status: 'error',
      title: 'Falha ao cadastrar. Verifique os dados e tente novamente.',
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
      border="3px solid #C5C768"
      w={{base: '100%', md: '50%'}}
      align="center"
      p={{base: '15px', md: '55px'}}
    >
      <Heading as="h2" fontSize="25px" color="title" fontWeight="bold">
        ÁREA DO DONATÁRIO
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
            name="name"
            placeholder="digite aqui..."
            title="Nome:"
            w="100%"
          />
          <CustomInput
            name="adminName"
            placeholder="digite aqui..."
            title="Administrador/ responsável:"
            w="100%"
          />
          <CustomInput name="cnpj" placeholder="digite aqui..." title="CNPJ:" />
          <CustomInput name="cep" placeholder="digite aqui..." title="CEP:" />
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
              name="stayLoggedDonee"
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
            bg="title"
            color="white"
            _hover={{bg: 'title'}}
            border="1px solid #53882A"
            type="submit"
            isDisabled={!methods.formState.isValid}
          >
            Cadastrar
          </Button>
        </FormProvider>
        <Text justifySelf="center" color="title" fontWeight="bold">
          Já possui cadastro?<Link color="description"> Faça login</Link>
        </Text>
      </SimpleGrid>
    </Flex>
  );
}
