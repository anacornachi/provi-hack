import {
    Flex,
    Link as ChakraLink
} from "@chakra-ui/react";
import Link from "next/link"

function MenuOptions({href, children}: any) {
    return (
        <Flex
        fontSize={'20px'}
        direction={'row'}
        h={'80px'}
        w={'100%'}
        borderTop={'solid 1px'}
        borderColor={'white'}
        >
            <Link href={href} passHref>
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
            </Link>
        </Flex>
    );
}

export default MenuOptions;