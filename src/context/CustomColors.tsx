import { useColorModeValue } from "@chakra-ui/react";
import { createContext, useEffect, useState } from "react";
import { CustomColorsProviderProps } from "schemas/ContextSchema";

export const CustomColorsContext = createContext<any | null>(null);

export const CustomColorsProvider = (props: CustomColorsProviderProps) => {
  const { children } = props;
  const [myColors, setMyColors] = useState<any>();

  // List of colors
  const title = useColorModeValue("pumpkin", "blue_atoll"),
    header = useColorModeValue("good_blue", "cyber_yellow"),
    paragraph = useColorModeValue("gray.700", "new_white"),
    span = useColorModeValue("gray.500", "purple.200"),
    light = useColorModeValue("gray.50", "gray.800"),
    dark = useColorModeValue("gray.800", "gray.50"),
    crimson_orange = useColorModeValue("space_cherry", "pumpkin");

  useEffect(() => {
    setMyColors({
      title,
      header,
      paragraph,
      span,
      light,
      dark,
      crimson_orange,
    });
  }, [title, header, paragraph, span, light, dark, crimson_orange]);

  return (
    <CustomColorsContext.Provider value={{ myColors }}>
      {children}
    </CustomColorsContext.Provider>
  );
};
