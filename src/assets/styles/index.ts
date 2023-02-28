import { StyleFunctionProps } from "@chakra-ui/react";
import { removeBlur, scrollbarOne } from "./global/AnimationCss";
import { body } from "./global/BaseCss";
import { cardFlex, gridCards } from "./global/CardFlexCss";
import { currentLayout, footer, header } from "./global/LayoutCss";

export const styles = {
  global: (props: StyleFunctionProps) => ({
    // Base
    body: body,

    // Layout
    ".layout": currentLayout,
    ".header": header,
    ".footer": footer,

    // Global
    ".grid-cards": gridCards,
    ".card-flex": cardFlex(props),

    // Animation
    ".remove-blur": removeBlur,
    ".scrollbar_one": scrollbarOne,
  }),
};
