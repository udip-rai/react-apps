import { useColorModeValue } from "@chakra-ui/react";
import { createContext, useEffect, useState } from "react";
import { CustomColorsProviderProps } from "schemas/apps/ContextSchema";

export const CustomColorsContext = createContext<any | null>(null);

export const CustomColorsProvider = (props: CustomColorsProviderProps) => {
  const { children } = props;
  const [myColors, setMyColors] = useState<any>();

  // List of colors
  const logo = useColorModeValue("space_cherry", "lime_green"),
    title = useColorModeValue("good_blue", "cyber_yellow"),
    header = useColorModeValue("pumpkin", "blue_atoll"),
    para = useColorModeValue("gray.700", "new_white"),
    span = useColorModeValue("gray.500", "primary.200"),
    extra1 = useColorModeValue("forest_biome", "landing_light"),
    blue = useColorModeValue("yale_blue", "sky_blue"),
    red = useColorModeValue("cherry_tomato", "rapture_rose"),
    yellow = useColorModeValue("vibrant_yellow", "mellow_yellow"),
    orange = useColorModeValue("dark_orange", "turkish_blue"),
    green = useColorModeValue("forest_green", "moss_green"),
    light = useColorModeValue("gray.50", "gray.800"),
    dark = useColorModeValue("gray.800", "gray.50");

  useEffect(() => {
    setMyColors({
      logo,
      title,
      header,
      para,
      span,
      light,
      blue,
      green,
      yellow,
      orange,
      red,
      dark,
    });
  }, [
    logo,
    title,
    header,
    para,
    span,
    extra1,
    blue,
    red,
    green,
    yellow,
    orange,
    light,
    dark,
  ]);

  return (
    <CustomColorsContext.Provider value={{ myColors }}>
      {children}
    </CustomColorsContext.Provider>
  );
};
