import { Flex, Text } from "@chakra-ui/react";
import {
  moon_rise_img,
  moon_set_img,
  sunrise_img,
  sunset_img,
} from "assets/images/apps/weather-app";
import { CustomColorsContext } from "context";
import { useContext } from "react";
import { WeatherHighlightSunProps } from "schemas/apps/WeatherAppSchema";
import { WeatherHighlightSingleSun } from "./WeatherHighlightSingleSun";

export const WeatherHighlightSun = (props: WeatherHighlightSunProps) => {
  const { myColors } = useContext(CustomColorsContext),
    { sunMoonToday, diff } = props;

  return (
    <Flex className="today-highlight sunmoon">
      <Text color={myColors?.title} lineHeight={0}>
        Sun / Moon
        <Text as="span" textStyle="span" fontWeight="semi-bold">
          &nbsp;(Rise & Set)
        </Text>
      </Text>

      <Flex justifyContent="space-between">
        <WeatherHighlightSingleSun
          img={sunrise_img}
          time={sunMoonToday.sunrise}
          diff={diff.sunrise}
        />
        <WeatherHighlightSingleSun
          img={sunset_img}
          time={sunMoonToday.sunset}
          diff={diff.sunset}
        />
      </Flex>
      <Flex justifyContent="space-between">
        <WeatherHighlightSingleSun
          img={moon_rise_img}
          time={sunMoonToday.moonrise}
          diff={diff.moonrise}
        />
        <WeatherHighlightSingleSun
          img={moon_set_img}
          time={sunMoonToday.moonset}
          diff={diff.moonset}
        />
      </Flex>
    </Flex>
  );
};
