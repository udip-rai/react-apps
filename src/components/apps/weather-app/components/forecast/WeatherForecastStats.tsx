import { Center, Image, Text } from "@chakra-ui/react";
import { WeatherDayStatsProps } from "schemas/apps/WeatherAppSchema";

export const WeatherForecastStats = (props: WeatherDayStatsProps) => {
  const { monthDay, day, temperature, degree, img, myColors } = props;
  return (
    <Center
      className="weather-forecast-daystat"
      key={Date.now() + Math.random()}
    >
      <Text>
        <Text as="span" color={myColors?.crimson_orange}>
          {day.slice(0, 3)}
        </Text>
        &nbsp;{monthDay}
      </Text>
      <Image
        boxSize="50px"
        src={require(`assets/images/apps/weather-app/${img}`)}
      />
      <Text>
        {temperature}
        <Text as="span" color={myColors?.crimson_orange}>
          &nbsp;&#176;{degree}
        </Text>
      </Text>
    </Center>
  );
};
