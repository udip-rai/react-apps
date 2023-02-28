import { extendTheme } from "@chakra-ui/react";
import { styles } from "assets/styles";
import { breakpoints } from "./breakpoints";
import { colors } from "./colors";
import { fonts } from "./fonts";
import { textStyles } from "./text_styles";

export const ThemeOne = extendTheme({
  breakpoints: breakpoints,
  colors: colors,
  fonts: fonts,
  styles: styles,
  textStyles: textStyles,
});
