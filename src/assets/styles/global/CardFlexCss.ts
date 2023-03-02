import { StyleFunctionProps } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const gridCards = {
  gap: "40px",
  gridTemplateColumns: ["auto", "repeat(auto-fit, minMax(190px, 1fr))"],
  justifyContent: "space-evenly",
  alignItems: "center",
  h: "100%",
};

export const cardFlex = (props: StyleFunctionProps) => ({
  w: 150,
  h: 250,
  borderRadius: "xl",
  flexDirection: "column",
  justifyContent: "center",
  justifySelf: "center",
  textAlign: "center",
  fontSize: "md",
  fontWeight: "bold",
  div: {
    w: "full",
    h: "185px",
    flexDirection: "column",
    img: {
      boxSize: "100%",
      objectFit: "contain",
      "&:hover": {
        transform: "scale(1.09)",
        transition: "0.2s ease-in-out",
      },
    },
  },
  ".card-btn": {
    bg: mode("red.300", "bright_red")(props),
    fontSize: "sm",
  },
});
