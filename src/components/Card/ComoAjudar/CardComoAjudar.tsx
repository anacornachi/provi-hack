import { Box, Text, Flex } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";

type Props = {
    image: any;
    title: string;
}

export default function CardComoAjudar({ image, title }: Props) {

    return (
        <Flex
            w='380px'
            h='490px'
            bg="#C5C768"
            borderRadius="1em"
            >
            <Flex
            position={'relative'}
            w='380px'
            h='490px'
            borderRadius="1em"
            border="2px solid #53882A"
            overflow="hidden"
            >
                <Image
                    src={image}
                    alt={title}
                    objectFit={'cover'}
                    objectPosition={'relative'}
                />
                <Text
                top={'400px'}
                left={'80px'}
                zIndex={100}
                position={'absolute'}
                fontFamily={'heading'}
                color="white"
                fontSize="30">
                    {title}
                </Text>
            </Flex>
        </Flex>
    )
}


