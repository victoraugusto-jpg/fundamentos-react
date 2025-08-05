import { Flex, Heading, Image, Stack, VStack } from "@chakra-ui/react";

import loginImage from "../../public/assets/login-image.gif";
import { BsStackOverflow } from "react-icons/bs";

export default function Login() {
  return (
    <Flex w="100vw" h="100vh" bg="white">
      <Flex w="50%" bg="#2c73eb" align="center" justify="center">
        <Image w={500} h={500} src={loginImage.src} />
      </Flex>
      <VStack w="50%" bg="green.400" align="start">
        <Heading>Account Login</Heading>
      </VStack>
    </Flex>
  );
}
