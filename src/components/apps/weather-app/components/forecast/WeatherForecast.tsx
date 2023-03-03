import { GridItem, Center, Stack, Flex, Text } from "@chakra-ui/react";
import { CustomColorsContext } from "context";
import { useContext } from "react";
import { WeatherForecastProps } from "schemas/apps/WeatherAppSchema";
import { unixToTimeStamp, findWeatherIcon } from "utils/logic";
import { WeatherForecastCircle } from "./WeatherForecastCircle";
import { WeatherForecastStats } from "./WeatherForecastStats";
import { WeatherForecastMenu } from "./WeatherForecastMenu";

export const WeatherForecast = (props: WeatherForecastProps) => {
  const { myColors } = useContext(CustomColorsContext),
    { dailyDay, degree, handleDegree, setDegree } = props,
    weatherCircle = { degree, setDegree, myColors };

  return (
    <GridItem className="weather-forecast scrollbar-one" area="forecast">
      <Center className="weather-forecast-header">
        <Text color={myColors?.header} textStyle="header">
          Weather Forecast
        </Text>

        <Center gap={[2, 2, 2, 3]}>
          <Stack direction="row" spacing={[1, 1, 1, 1, 2]}>
            <WeatherForecastCircle initial="C" {...weatherCircle} />
            <WeatherForecastCircle initial="F" {...weatherCircle} />
          </Stack>

          <WeatherForecastMenu />
        </Center>
      </Center>

      <Flex className="weather-forecast-images scrollbar-one">
        {dailyDay?.map((item: any, i: number) => {
          let day = unixToTimeStamp(item?.dt)?.day,
            monthDay = unixToTimeStamp(item?.dt)?.monthDay,
            temp = handleDegree(item?.temp.day),
            img = findWeatherIcon(item?.weather[0]?.icon)[0]?.img;

          const daystats = {
            monthDay,
            day,
            temp,
            degree,
            img,
            myColors,
          };
          return (
            <WeatherForecastStats key={item?.dt + item?.temp} {...daystats} />
          );
        })}
      </Flex>
    </GridItem>
  );
};
