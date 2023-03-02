import { StyleFunctionProps } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const weatherAppCss = (props: StyleFunctionProps) => ({
  h: ["100%", "100%", "100%", "calc(100vh - 140px)"],
  // p: [1, 2, 3, 4],
  // gap: [1, 2, 3, 4, 5],
  minW: 300,
  minH: 300,
  color: mode("gray.800", "gray.50")(props),
  bg: mode("gray.300", "gray.700")(props),
  ".weather-current, .weather-highlight": {
    px: 2,
  },
});

export const weatherCurrentCss = (props: StyleFunctionProps) => ({
  pb: [2, 2, 2, 5],
  bg: mode("gray.50", "gray.800")(props),
  // alignSelf: ["none", "none", "none", "flex-start"],
  textStyle: "xsText",
  ".weather-current-grid": {
    gridTemplateRows: [
      "repeat(2,1fr)",
      "repeat(2,1fr)",
      "repeat(2,1fr)",
      "repeat(6,1fr)",
    ],
    gridTemplateColumns: [
      "repeat(6,1fr)",
      "repeat(6,1fr)",
      "repeat(6,1fr)",
      "repeat(1,1fr)",
    ],
    height: "100%",
    pt: 2,
    gap: [1, 2, 2, 3],

    ".weather-current-searchbar, .weather-current-img, .weather-current-details":
      {
        display: "flex",
        justifySelf: "center",
      },
    ".weather-current-searchbar, .chakra-input": {
      color: mode("gray.50", "gray.800")(props),
    },
    ".weather-current-searchbar": {
      position: "relative",
      maxWidth: "400px",
      w: [110, 110, 180, 250],
      order: 0,
      ".chakra-input__left-element ": {
        h: ["30px", "30px", "30px", "40px"],
        fontSize: ["20px", "20px", "20px", "25px"],
      },
      // flexDirection: "column",
      ".weather-current-suggestion": {
        w: [110, 110, 180, 250],
        h: 300,
        position: "absolute",
        bg: "violet",
        top: ["30px", "30px", "30px", "40px"],
        overflowY: "scroll",
      },
      ".chakra-input": {
        h: ["30px", "30px", "30px", "40px"],
        bg: mode("gray.600", "gray.200")(props),
        "&::placeholder": {
          color: mode("gray.50", "gray.800")(props),
          fontSize: ["0.6rem", "0.7rem", "0.8rem", "0.9rem"],
        },
      },
    },
    ".weather-current-img": {
      order: [2, 2, 2, 1],
      div: {
        alignItems: "center",
        ".chakra-image": {
          boxSize: ["90px", "90px", "90px", "120px", "140px"],
          objectFit: "contain",
        },
        // ".chakra-text": {
        //   textStyle: "span-bold",
        // },
      },
    },
    ".weather-current-details": {
      display: "flex",
      flexDirection: "column",
      gap: 1,
      order: [1, 1, 1, 2],

      ".weather-current-state": {
        flexDirection: ["row", "row", "row", "column"],
        justifyContent: "center",
        gap: [2, 2, 5, 2],
      },

      ".weather-current-location": {
        overflow: "hidden",
        alignSelf: "center",
        w: "fit-content",
        p: 2,
        gap: [2, 2, 2, 3],
        border: "1px dashed gray",
        borderWidth: 3,
      },
    },
  },
});

export const weatherForecastCss = (props: StyleFunctionProps) => ({
  pt: [1, 1, 1, 2],
  overflowX: "scroll",
  px: 0,
  textStyle: "smText",
  fontWeight: "bold",
  ".weather-forecast-header": {
    px: 2,
    justifyContent: "space-between",

    ".weather-forecast-circle, .chakra-avatar": {
      boxSize: ["22px", "22px", "22px", "30px", "35px"],
    },
    ".weather-forecast-circle": {
      cursor: "pointer",
    },
    ".chakra-menu__menu-button": {
      w: [90, 90, 105, 140, 160],
      h: ["28px", "28px", "28px", "45px"],
      minW: 90,
      ps: "1rem",
      pe: "0.5rem",
      bg: mode("gray.600", "gray.200")(props),
      textStyle: "smText",

      ".justify-between": {
        gap: [1, 1, 1, 2],
      },

      ".chakra-text, .chakra-button__icon svg": {
        color: mode("gray.50", "gray.800")(props),
      },

      // ".chakra-text": {
      //   textStyle: P_H6_BTEXT,
      // },

      ".chakra-avatar__badge": {
        borderColor: "good_orange",
        bg: "good_orange",
        boxSize: [2, 2, 2, 3.5],
      },

      ".chakra-button__icon svg": {
        h: ["12px", "12px", "12px", "20px"],
      },

      ".chakra-menu__menuitem": {
        minH: 20,
        h: ["20px", "20px", "20px", "30px"],
      },
    },
  },
  ".weather-forecast-images": {
    px: 0,
    pt: [1.5, 1.5, 1.5, 2.5],
    gap: 4,
    ".weather-forecast-daystat": {
      bg: mode("gray.50", "gray.800")(props),
      color: mode("gray.800", "gray.50")(props),
      flexDirection: "column",
      minW: "130px",
      maxH: 200,
      w: "130px",
      h: ["85px", "85px", "85px", "105px"],
      borderRadius: "0.5rem",
      boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
      "&:first-of-type": {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
      },
      "&:last-of-type": {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
      },
    },
  },
});

export const weatherHighlightCss = (props: StyleFunctionProps) => ({
  overflowY: "scroll",
  pb: 5,
  textStyle: "h6",
  "p:first-of-type": {
    py: 2,
  },
  ".weather-highlight-grids": {
    ".today-highlight.sunmoon": {
      pt: 5,
    },
    ".today-highlight": {
      minW: 270,
      w: 270,
      h: 250,
      px: 4,
      py: 2,
      flexDirection: "column",
      justifyContent: ["center", "center", "space-between"],
      justifySelf: "center",
      fontWeight: "bold",
      bgColor: mode("gray.50", "gray.800")(props),
      borderRadius: "lg",

      ".main-highlight": {
        position: "relative",
        flexDirection: "row",
        justifyContent: "space-between",
        h: "80%",
        ".temp-img": {
          position: "absolute",
          right: 0,
          ".chakra-image": {
            w: "80px",
            h: "150px",
            objectFit: "contain",
          },
        },
        ".monster-img": {
          position: "absolute",
          right: 7,
          bottom: 0,
          boxSize: "4rem",
          ".chakra-image": {
            boxSize: "full",
            objectFit: "contain",
          },
        },
        ".chakra-slider__thumb": {
          bgColor: "good_blue",
        },
      },
    },
  },
});
