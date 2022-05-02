import { Flex } from "@chakra-ui/react"
import Container from "@components/layouts/Container";
import Tag from "@components/Tag";
import Image from "next/image";
import mandioca from "@public/assets/images/mandioca.jpg"

function Hero() {
    return (
            <Flex
            h={'729px'}
            direction={'column'}
            align={'center'}
            position={'relative'}
                borderY={'solid'}
            borderColor={'description'}>
                <Image
                src={mandioca}
                alt={'imagem hero'}
                objectFit={'cover'} />
                <Tag
                top={'90%'}
                position={'absolute'}
                >COMO AJUDAR?</Tag>
            </Flex>
    );
}

export default Hero;