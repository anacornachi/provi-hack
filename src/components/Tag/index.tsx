import { Flex, Text } from "@chakra-ui/react"

function Tag({position, top, children}: any) {
    return (
        <Flex
        w={'750px'}
        h={'100px'}
        bg={'description'}
        borderRadius={'12px'}
        justify={'center'}
        align={'center'}
        boxShadow={'lg'}
        position={position}
        top={top}>
            <Text
            fontFamily={'heading'}
            fontSize={'40px'}
            color={'white'}>
                {children}
            </Text>
        </Flex>
    );
}

export default Tag;