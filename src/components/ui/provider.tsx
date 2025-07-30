"use client";

import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defaultSystem,
} from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";
import { themeConfig } from "@/src/styles/theme";

const theme = createSystem(defaultConfig, themeConfig);

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={theme}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
