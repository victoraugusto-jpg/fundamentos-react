import {
  Button,
  Link as ChakraLink,
  Field,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";

import loginImage from "../../public/assets/login-image.gif";
import { Checkbox } from "../components/ui/checkbox";
import { PasswordInput } from "../components/ui/password-input";

export default function Login() {
  return (
    <Flex w="100vw" h="100vh" bg="white">
      <Flex w="50%" bg="#2c73eb" align="center" justify="center">
        <Image w={500} h={500} src={loginImage.src} />
      </Flex>
      <VStack w="50%" bg="white" justify="center">
        <Stack>
          <Heading as="h1" color="black" fontSize="3xl" fontWeight="bold">
            Entrar
          </Heading>
          <Text color="gray.400" fontWeight="normal" fontSize="lg">
            Se você já é membro, você pode fazer login com seu endereço de
            e-mail e senha.
          </Text>
          <VStack align="flex-start" gap={6} mt={10}>
            <Field.Root required>
              <Field.Label color="black">Email</Field.Label>
              <Input
                type="email"
                h={16}
                colorPalette="blue"
                borderRadius="md"
                color="black"
              />
            </Field.Root>

            <Field.Root required>
              <Field.Label color="black">Senha</Field.Label>
              <PasswordInput
                h={16}
                colorPalette="blue"
                borderRadius="md"
                color="black"
              />
            </Field.Root>

            <Checkbox
              colorPalette="blue"
              color="gray.500"
              fontSize="md"
              fontWeight="medium"
            >
              Lembre-me
            </Checkbox>

            <Button
              w="full"
              h={16}
              borderRadius="md"
              fontSize="md"
              fontWeight="medium"
              colorPalette="blue"
            >
              Entrar
            </Button>
          </VStack>
          <HStack justify="center" gap={1} mt={10}>
            <Text color="gray.500" fontSize="md" fontWeight="medium">
              Não possui uma conta?
            </Text>
            <ChakraLink color="blue.500" asChild>
              <NextLink href="/sign-up">Clique aqui</NextLink>
            </ChakraLink>
          </HStack>
        </Stack>
      </VStack>
    </Flex>
  );
}
