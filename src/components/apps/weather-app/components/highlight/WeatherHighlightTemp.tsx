import { Flex, Box, Text, Image } from "@chakra-ui/react";
import { temperature_img } from "assets/images/apps/weather-app";
import { CustomColorsContext } from "context";
import { useContext } from "react";
import { WeatherHighlightTempProps } from "schemas/apps/WeatherAppSchema";
import { iconSize } from "utils/constants";
import { WeatherCurrentLocation } from "../current/WeatherCurrentLocation";
import { WeatherHighlightMain } from "./WeatherHighlightMain";

export const WeatherHighlightTemp = (props: WeatherHighlightTempProps) => {
  const { myColors } = useContext(CustomColorsContext);
  const locationMiniTemp = {
    place: props.timezone,
    txtStyle: "h6",
    iconSize: iconSize,
  };

  return (
    <Flex className="today-highlight">
      <Text color={myColors?.title}>Temperature</Text>

      <Flex className="main-highlight">
        <WeatherHighlightMain {...props} {...myColors} />

        <Box className="temp-img">
          <Image src={temperature_img} />
        </Box>
      </Flex>

      <WeatherCurrentLocation {...locationMiniTemp} />
    </Flex>
  );
};
