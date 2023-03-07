import { Circle, Text } from "@chakra-ui/react";
import { WeatherForecastCircleProps } from "schemas/apps/WeatherAppSchema";

export const WeatherForecastCircle = (props: WeatherForecastCircleProps) => {
  const { initial, myColors, degree, setDegree } = props;

  return (
    <Circle
      className="weather-forecast-circle"
      onClick={() => setDegree(initial)}
      bg={initial === degree ? myColors?.crimson_orange : myColors?.darker}
    >
      <Text color={myColors?.lighter} as="sup" pt={2}>
        &#176;
      </Text>
      <Text color={myColors?.lighter}>{initial}</Text>
    </Circle>
  );
};
