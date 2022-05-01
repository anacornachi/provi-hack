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
import logoWhite from "@public/assets/images/logo-white.png"

function MyArea() {
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
            >
                <Text>teste</Text>
            </Flex>
        </Flex>
    );
}

export default MyArea;