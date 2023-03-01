import { Box, Text } from "@chakra-ui/react";
import { CustomColorsContext } from "context";
import { useContext } from "react";
import { WeatherTempDayTimeProps } from "schemas/apps/WeatherAppSchema";

export const WeatherTempDayTime = (props: WeatherTempDayTimeProps) => {
  const { myColors } = useContext(CustomColorsContext),
    { degree, temperature, datetime } = props,
    cDay = datetime?.day,
    cFulldate = datetime?.fulldate;

  return (
    <Box>
      <Text textStyle="xlText" lineHeight={6} color={myColors?.header}>
        {temperature}
        <Text as="span" textStyle="h6" color={myColors?.crimson_orange}>
          &nbsp;&#176;{degree === "C" ? "C" : "F"}
        </Text>
      </Text>
      <Text textStyle="smText" color={myColors?.span}>
        {cDay}
        <Text as="span" color={myColors?.header}>
          &nbsp;{cFulldate}
        </Text>
        <Text as="span">&nbsp;&nbsp;{datetime?.time}</Text>
      </Text>
    </Box>
  );
};