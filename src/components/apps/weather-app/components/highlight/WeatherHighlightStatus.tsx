import { Box, Text } from "@chakra-ui/react";
import { WeatherHighlightStatusProps } from "schemas/apps/WeatherAppSchema";

export const WeatherHighlightStatus = (props: WeatherHighlightStatusProps) => {
  const { color, msg } = props;
  return (
    <Box>
      Status:
      <Text as="span" color={color}>
        &nbsp;{msg}
      </Text>
    </Box>
  );
};
