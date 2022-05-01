import { Box, Text, Flex } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";


type Props = {
    image: StaticImageData;
    title: string;
}

export default function CardComoAjudar({ image, title }: Props) {
    return (
        <Flex
            w={{ base: "90%", sm: "60%", md: "30%" }}
            h={{ base: "25%", sm: "40%", md: "80%" }}
            bg="#C5C768"
            borderRadius="1em"
            border="3px solid #53882A"
            flexDirection="column"
            alignItems="center"
        // justifyContent="space-around"
        >
            <Flex
                h="100%"
                w="100%"
                alignItems="center"
                justifyContent="center"
            >
                <Image
                    src={image}
                    alt={title} 
                />
                <Flex
                    position="absolute"
                    h="10%"
                    w="33%"
                    top="60%"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Text 
                    color="white"
                    fontSize="">{title}</Text>
                </Flex>
            </Flex>
        </Flex>
    )
}


