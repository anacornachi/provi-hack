import {
    Flex,
    Text
} from "@chakra-ui/react";
import CustomButton from "@components/CustomButton";
import CustomInput from "@components/CustomInput";
import {FormProvider, useForm} from 'react-hook-form';
import { BiSearchAlt2 } from "react-icons/bi";

function CreateProduct() {
    const methods = useForm({
        //resolver: createDonorResolver, 
        mode: 'onChange'})

    return (
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
        );
}

export default CreateProduct;