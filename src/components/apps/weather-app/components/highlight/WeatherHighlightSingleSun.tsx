import { Stack, Image, Text } from "@chakra-ui/react";
import { CustomColorsContext } from "context";
import { useContext } from "react";
import { WeatherHighlightSingleSunProps } from "schemas/apps/WeatherAppSchema";

export const WeatherHighlightSingleSun = (
  props: WeatherHighlightSingleSunProps
) => {
  const { myColors } = useContext(CustomColorsContext),
    { img, time, diff } = props,
    newDiff = diff[0] === "-" ? `-${diff}` : `+${diff}`;
  return (
    <Stack direction="column" spacing={0} align="center">
      <Image boxSize="75%" objectFit="contain" src={img} />
      <Text textStyle="xsSpan" lineHeight={0} fontWeight="bold">
        {time}
        <Text
          as="span"
          textStyle="xsSpan"
          fontWeight="bold"
          color={myColors?.span}
          lineHeight={0}
        >
          &nbsp;&nbsp;{newDiff}
        </Text>
      </Text>
    </Stack>
  );
};
