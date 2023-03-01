import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { MainRoute } from "routes/MainRoute";
import ErrorBoundary from "components/errors/ErrorBoundary";
import { ThemeOne } from "assets/themes/theme1";
import { CustomColorsProvider } from "context";

export const App = () => (
  <ErrorBoundary>
    <ChakraProvider theme={ThemeOne}>
      <CustomColorsProvider>
        <MainRoute />
      </CustomColorsProvider>
    </ChakraProvider>
  </ErrorBoundary>
);
