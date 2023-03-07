import { Box, Flex, Circle, Image, Text } from "@chakra-ui/react";
import { location_img } from "assets/images/apps/weather-app";
import { CustomColorsContext } from "context";
import { useContext } from "react";
import { WeatherCurrentLocationProps } from "schemas/apps/WeatherAppSchema";
import { hideFromLg, iconSize, showFromLg } from "utils/constants";
import { shortenLocationName } from "utils/logic/shortenLocationName";

export const WeatherCurrentLocation = (props: WeatherCurrentLocationProps) => {
  const { myColors } = useContext(CustomColorsContext),
    { place, txtStyle } = props,
    newPlace = shortenLocationName(place);

  return (
    <Flex gap={[1, 1, 1, 2]} alignItems="center">
      <Circle bg={myColors?.crimson_orange} size={iconSize}>
        <Image boxSize="85%" src={location_img} />
      </Circle>
      <Box textStyle={txtStyle}>
        <Text display={showFromLg}> {place}</Text>
        <Text display={hideFromLg}> {newPlace}</Text>
      </Box>
    </Flex>
  );
};
