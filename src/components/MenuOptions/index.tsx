import {
    Flex,
    Link as ChakraLink
} from "@chakra-ui/react";

function MenuOptions({onClick, children}: any) {
    return (
        <Flex
        fontSize={'20px'}
        direction={'row'}
        h={'80px'}
        w={'100%'}
        borderTop={'solid 1px'}
        borderColor={'white'}
        >
            <Flex onClick={onClick}>
                <ChakraLink
                display={'flex'}
                alignItems={'center'}
                gap={'14px'}
                _hover={{
                    border: 'none',
                    color: 'title'
                }}>
                    {children}
                </ChakraLink>   
            </Flex>
        </Flex>
    );
}

export default MenuOptions;