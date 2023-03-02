import { Flex, Text, Box, Image } from "@chakra-ui/react";
import { CustomColorsContext } from "context";
import { useContext } from "react";
import { WeatherHightlightSingleProps } from "schemas/apps/WeatherAppSchema";
import { compareWeather } from "utils/logic";
import { WeatherHighlightSlider } from "./WeatherHighlightSlider";
import { WeatherHighlightStatus } from "./WeatherHighlightStatus";

export const WeatherHightlightSingle = (
  props: WeatherHightlightSingleProps
) => {
  const { myColors } = useContext(CustomColorsContext);
  const { title, unit, slider, highlight, monster } = props;
  const currentStatus = compareWeather(highlight[0], highlight[1]);

  return (
    <Flex className="today-highlight">
      <Text color={myColors?.title}>{title}</Text>
      <Flex className="main-highlight">
        <Box textStyle="display6">
          {highlight[1]}
          <Text as="span" textStyle="h6" color={myColors?.span}>
            &nbsp;{unit}
          </Text>
        </Box>
        <WeatherHighlightSlider
          min={slider.min}
          max={slider.max}
          default1={highlight[1]}
          color={currentStatus[1]}
        />
        <Box className="monster-img">
          <Image src={require(`assets/images/monsters/${monster}`)} />
        </Box>
      </Flex>

      <WeatherHighlightStatus
        color={currentStatus[1]}
        msg={currentStatus[0] ? currentStatus[0] : "Not Updated"}
      />
    </Flex>
  );
};
