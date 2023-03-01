import { StyleFunctionProps } from "@chakra-ui/react";
import {
  weatherAppCss,
  weatherCurrentCss,
  weatherForecastCss,
  weatherHighlightCss,
} from "./apps/WeatherAppCss";
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
    ".scrollbar-one": scrollbarOne,

    // apps/weather-app
    ".weather-app": weatherAppCss(props),
    ".weather-current": weatherCurrentCss(props),
    ".weather-forecast": weatherForecastCss(props),
    ".weather-highlight": weatherHighlightCss(props),
  }),
};
