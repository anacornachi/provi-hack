import { Flex, Text } from "@chakra-ui/react"

function UserSettings() {
    return (
        <Flex
        bg={'#C1D990'}
        w={'80%'}
        p={'29px'}
        gap={'34px'}
        direction={'column'}
        >
            <Text
            fontWeight={'bold'}
            fontSize={'34px'}
            fontFamily={'Open Sans, sans-serif'}
            color={'white'}
            >Edite seus dados</Text>
        </Flex>
    );
}

export default UserSettings;