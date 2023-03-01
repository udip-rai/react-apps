import { Stack, Image, Text } from "@chakra-ui/react";
import { CustomColorsContext } from "context";
import { useContext } from "react";
import { WeatherHighlightSingleSunProps } from "schemas/apps/WeatherAppSchema";

export const WeatherHighlightSingleSun = (
  props: WeatherHighlightSingleSunProps
) => {
  const { myColors } = useContext(CustomColorsContext);
  const { img, time, diff } = props;
  return (
    <Stack direction="column" spacing={0} align="center">
      <Image boxSize="75%" objectFit="contain" src={img} />
      <Text textStyle="h6" lineHeight={0}>
        {time}
        <Text
          as="span"
          textStyle="xsSpan"
          color={myColors?.span}
          fontWeight="bold"
          lineHeight={0}
        >
          &nbsp;&nbsp;-{diff}
        </Text>
      </Text>
    </Stack>
  );
};
