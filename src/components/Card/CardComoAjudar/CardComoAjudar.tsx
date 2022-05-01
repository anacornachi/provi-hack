import { Box, Text, Flex } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";

type Props = {
    image: any;
    title: string;
}

export default function CardComoAjudar({ image, title }: Props) {

    return (
        <Flex
            w={{ base: "95%", sm: "70%", md: "40%" }}
            h={{ base: "35%", sm: "48%", md: "80%" }}
            bg="#C5C768"
            borderRadius="1em"
            alignItems="center"
            >
            <Flex 
            h="100%" 
            overflow="hidden"
            position="relative"
            objectFit="fill"
            borderRadius="1em"
            border="3px solid #53882A"
            >
                <Image
                    src={image}
                    alt={title}
                />
                <Flex
                    position="absolute"
                    h="10%"
                    w="33%"
                    top="80%"
                    ml="33%"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Text 
                    color="white"
                    fontSize="30"
                    textShadow="-1px -1px 0px black"
                    >
                        {title}
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    )
}


