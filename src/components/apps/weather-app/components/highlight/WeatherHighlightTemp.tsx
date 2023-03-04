import { Flex, Box, Text, Image, Tooltip } from "@chakra-ui/react";
import { temperature_img } from "assets/images/apps/weather-app";
import { fever_img } from "assets/images/police";
import { CustomColorsContext } from "context";
import { useContext, useState } from "react";
import { WeatherHighlightTempProps } from "schemas/apps/WeatherAppSchema";
import { iconSize } from "utils/constants";
import { WeatherCurrentLocation } from "../current/WeatherCurrentLocation";
import { WeatherHighlightMain } from "./WeatherHighlightMain";

export const WeatherHighlightTemp = (props: WeatherHighlightTempProps) => {
  const { myColors } = useContext(CustomColorsContext);
  const [isLabelOpen, setIsLabelOpen] = useState<boolean>(false);

  const locationMiniTemp = {
    place: props.timezone,
    txtStyle: "p",
    iconSize: iconSize,
  };

  return (
    <Flex className="today-highlight">
      <Text color={myColors?.title}>Temperature</Text>

      <Flex className="main-highlight">
        <WeatherHighlightMain {...props} {...myColors} />

        <Box className="temp-img">
          <Tooltip
            isOpen={isLabelOpen}
            bg={myColors?.common}
            color={myColors?.common}
            hasArrow
            arrowSize={10}
            label={<Image boxSize="90px" src={fever_img} />}
            placement="left"
            onMouseEnter={() => setIsLabelOpen(true)}
            onMouseLeave={() => setIsLabelOpen(false)}
            onClick={() => setIsLabelOpen(true)}
          >
            <Image src={temperature_img} />
          </Tooltip>
        </Box>
      </Flex>

      <WeatherCurrentLocation {...locationMiniTemp} />
    </Flex>
  );
};
