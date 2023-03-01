import { StyleFunctionProps } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const body = (props: StyleFunctionProps) => ({
  // bg: mode("black", "white")(props),
  // color: mode("gray.50", "gray.700")(props),
  // w: 1280,
  maxW: 2000,
  margin: "0 auto",
  fontFamily: "poppins",
  fontSize: "sm",
  fontWeight: "normal",
});
