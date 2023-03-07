import {
  Flex,
  Text,
  Box,
  Image,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import { CustomColorsContext } from "context";
import { useContext, useState } from "react";
import { WeatherHightlightSingleProps } from "schemas/apps/WeatherAppSchema";
import { compareWeather } from "utils/logic";
import { WeatherHighlightSlider } from "./WeatherHighlightSlider";
import { WeatherHighlightStatus } from "./WeatherHighlightStatus";
import { WeatherHighlightTooltip } from "./WeatherHighlightTooltip";

export const WeatherHightlightSingle = (
  props: WeatherHightlightSingleProps
) => {
  const { myColors } = useContext(CustomColorsContext);
  const [isLabelOpen, setIsLabelOpen] = useState<boolean>(false);

  const { title, unit, slider, highlight, monster } = props,
    currentStatus = compareWeather(highlight[0], highlight[1]),
    arrowColor = useColorModeValue("#8952e0f0", "#b795eccc"),
    textColor = useColorModeValue("gray.200", "gray.500");

  return (
    <Flex className="today-highlight">
      <Text color={myColors?.title}>{title}</Text>
      <Flex className="main-highlight">
        <Box textStyle="h2">
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
          <Tooltip
            isOpen={isLabelOpen}
            hasArrow
            placement="left"
            label={<WeatherHighlightTooltip />}
            bg={arrowColor}
            color={textColor}
            arrowSize={10}
            p={0}
          >
            <Image
              src={require(`assets/images/monsters/${monster}`)}
              onMouseEnter={() => setIsLabelOpen(true)}
              onMouseLeave={() => setIsLabelOpen(false)}
              onClick={() => setIsLabelOpen(true)}
            />
          </Tooltip>
        </Box>
      </Flex>

      <WeatherHighlightStatus
        color={currentStatus[1]}
        msg={currentStatus[0] ? currentStatus[0] : "Not Updated"}
      />
    </Flex>
  );
};
