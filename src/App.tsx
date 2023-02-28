import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { MainRoute } from "routes";

export const App = () => (
  <ChakraProvider theme={theme}>
    <MainRoute />
  </ChakraProvider>
);
