import { Box, Flex, Circle, Image } from "@chakra-ui/react";
import { location_img } from "assets/images/apps/weather-app";
import { CustomColorsContext } from "context";
import { useContext } from "react";
import { WeatherCurrentLocationProps } from "schemas/apps/WeatherAppSchema";
import { iconSize } from "utils/constants";

export const WeatherCurrentLocation = (props: WeatherCurrentLocationProps) => {
  const { myColors } = useContext(CustomColorsContext);
  const { place, txtStyle } = props;
  return (
    <Flex gap={[1, 1, 1, 2]} alignItems="center">
      <Circle bg={myColors?.crimson_orange} size={iconSize}>
        <Image boxSize="85%" src={location_img} />
      </Circle>
      <Box textStyle={txtStyle}>{place}</Box>
    </Flex>
  );
};
