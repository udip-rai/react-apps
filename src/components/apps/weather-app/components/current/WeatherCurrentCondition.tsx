import { GridItem, Flex, Box } from "@chakra-ui/react";
import { WeatherCurrentProps } from "schemas/apps/WeatherAppSchema";
import { WeatherLocationMini } from "./WeatherLocationMini";
import { WeatherSituation } from "./WeatherSituation";
import { WeatherTempDayTime } from "./WeatherTempDayTime";

export const WeatherCurrentCondition = (props: WeatherCurrentProps) => {
  const {
    degree,
    temperature,
    datetime,
    dailyIcon,
    hourlyIcon,
    accuratePlace,
  } = props;

  const locationMini = {
    place: accuratePlace,
    txtStyle: "xsText",
  };

  const weatherSituation = {
    degree,
    temperature,
    datetime,
  };

  return (
    <GridItem
      className="weather-current-details"
      rowSpan={[2, 2, 2, 1]}
      colSpan={[4, 4, 4, 1]}
    >
      <Flex className="weather-current-state">
        <WeatherTempDayTime {...weatherSituation} />

        <Box>
          <WeatherSituation relative="daily" {...dailyIcon} />
          <WeatherSituation relative="hourly" {...hourlyIcon} />
        </Box>
      </Flex>

      <Flex className="weather-current-location">
        <WeatherLocationMini {...locationMini} />
      </Flex>
    </GridItem>
  );
};
