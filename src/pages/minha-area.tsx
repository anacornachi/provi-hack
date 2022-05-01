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
import CreateProduct from "@components/Forms/CreateProduct";
import UserHome from "@components/Home/Home";
import { useState } from "react"
import UserSettings from "@components/UserSettings";

function MyArea() {
    const methods = useForm({
        //resolver: createDonorResolver, 
        mode: 'onChange'})
    const [ home, setHome ] = useState(false)
    const [ createProduct, setCreateProduct ] = useState(true)
    const [ settings, setSettings ] = useState(false)

    function handleHome() {
        setHome(true)
        setCreateProduct(false)
        setSettings(false)
    }
    function handleCreateProduct() {
        setHome(false)
        setCreateProduct(true)
        setSettings(false)
    }
    function handleSettings() {
        setHome(false)
        setCreateProduct(false)
        setSettings(true)
    }

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
                <MenuOptions 
                onClick={handleHome}
                >
                    <BiHome />
                    Início
                </MenuOptions>
                <MenuOptions 
                onClick={handleCreateProduct}>
                    <BiPlusCircle />
                    Cadastrar produto
                </MenuOptions>
                <MenuOptions
                onClick={handleSettings}
                >
                    <Settings />
                    Configurações
                    </MenuOptions>
                <MenuOptions>
                    <Back />
                </MenuOptions>
                <Image src={logoWhite} alt={'logo'} />
            </Flex>

            {home && <UserHome />}
            {createProduct && <CreateProduct />}
            {settings && <UserSettings /> }
        </Flex>
    );
}

export default MyArea;