import {
    Flex,
    Text,
} from "@chakra-ui/react"
import { BiHome, BiPlusCircle } from "react-icons/bi"
import { 
    IoArrowBackCircleOutline as Back,
    IoSettingsOutline as Settings } from "react-icons/io5"
import MenuOptions from "../components/MenuOptions"
import Image from "next/image";
import logoWhite from "@public/assets/images/logo-white.png";
import CustomInput from "@components/CustomInput";
import {FormProvider, useForm} from 'react-hook-form';
import CustomButton from "@components/CustomButton";
import { BiSearchAlt2 } from "react-icons/bi";

function MyArea() {
    const methods = useForm({
        //resolver: createDonorResolver, 
        mode: 'onChange'})
    return ( 
        <Flex>
            <Flex
            bg={'description'}
            w={'20%'}
            p={'82px'}
            h={'850px'}
            direction={'column'}
            align={'flex-start'}
            color={'white'}
            >
                <Text
                fontSize={'32px'}
                mb={'68px'}
                alignSelf={'center'}
                >Minha Área</Text>
                <MenuOptions href={'/'}>
                    <BiHome />
                    Início
                </MenuOptions>
                <MenuOptions href={'/'}>
                    <BiPlusCircle />
                    Cadastrar produto
                </MenuOptions>
                <MenuOptions href={'/'}>
                    <Settings />
                    Configurações
                    </MenuOptions>
                <MenuOptions href={'/'}>
                    <Back />
                </MenuOptions>
                <Image src={logoWhite} alt={'logo'} />
            </Flex>

            <Flex
            bg={'#C1D990'}
            w={'80%'}
            p={'29px'}
            gap={'34px'}
            direction={'column'}
            >
                <Flex>
                    <FormProvider {...methods}>
                        <CustomInput 
                        w={'434px'} 
                        bgColor={'#FFFBF5'} 
                        leftIcon={<BiSearchAlt2 />}
                        name="buscar" 
                        placeholder="Buscar produto..."  />
                    </FormProvider>
                </Flex>
                <Flex
                gap={'34px'}
                >
                    <CustomButton>
                        Produtos Cadastrados
                    </CustomButton>
                    <CustomButton>
                        Histórico
                    </CustomButton>
                </Flex>
                <Flex
                w={'100%'}
                p={'34px'}
                gap={'34px'}
                bgColor={'#FFFBF5'}
                border={'solid 1px'}
                borderColor={'description'}
                borderRadius={'6px'}
                direction={'column'}>
                    <FormProvider {...methods}>
                        <CustomInput name="codigo" placeholder="Código/Produto" title="Produto" />
                        <Flex
                        gap={'14px'}>
                            <CustomInput name="quantidade" placeholder="Quantidade" title="Quantidade" />
                            <CustomInput name="unidade" placeholder="Kg | saco | etc" title="Unidade" />
                            <CustomInput name="vencimento" placeholder="DD/MM/AAAA" title="Vencimento" type={'date'} />
                        </Flex>
                        <CustomInput h={'300px'} name="obs" placeholder="Emabalagem reciclável, etc" title="Observações" />
                    </FormProvider>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default MyArea;