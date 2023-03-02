import { GridItem, Flex, Box } from "@chakra-ui/react";
import { WeatherCurrentProps } from "schemas/apps/WeatherAppSchema";
import { WeatherCurrentLocation } from "./WeatherCurrentLocation";
import { WeatherCurrentSituation } from "./WeatherCurrentSituation";
import { WeatherCurrentDateTemp } from "./WeatherCurrentDateTemp";

export const WeatherCurrentCondition = (props: WeatherCurrentProps) => {
  const { degree, temp, datetime, dailyIcon, hourlyIcon, accuratePlace } =
    props;

  const locationMini = {
    place: accuratePlace,
    txtStyle: "xsText",
  };

  const weatherCurrentDetails = {
    degree,
    temp,
    datetime,
  };

  return (
    <GridItem
      className="weather-current-details"
      rowSpan={[2, 2, 2, 1]}
      colSpan={[4, 4, 4, 1]}
    >
      <Flex className="weather-current-state">
        <WeatherCurrentDateTemp {...weatherCurrentDetails} />

        <Box>
          <WeatherCurrentSituation relative="daily" {...dailyIcon} />
          <WeatherCurrentSituation relative="hourly" {...hourlyIcon} />
        </Box>
      </Flex>

      <Flex className="weather-current-location">
        <WeatherCurrentLocation {...locationMini} />
      </Flex>
    </GridItem>
  );
};
