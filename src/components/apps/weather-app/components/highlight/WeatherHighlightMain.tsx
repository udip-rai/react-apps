import { Box, Flex, Text } from "@chakra-ui/react";
import { WeatherHighlightMainProps } from "schemas/apps/WeatherAppSchema";

export const WeatherHighlightMain = (props: WeatherHighlightMainProps) => {
  const { minMax, unit, span, crimson_green } = props;
  return (
    <Flex flexDir="column" gap={7} py={2}>
      {Object.values(minMax)?.map((item: any, i: number) => {
        return (
          <Flex
            key={Date.now() + item}
            gap={0}
            flexDir="column"
            lineHeight={10}
          >
            <Box>
              <Text as="span" textStyle="h2">
                {item}
              </Text>
              <Text as="span" color={crimson_green}>
                &nbsp;&#176;&nbsp;{unit}
              </Text>
            </Box>
            <Text
              as="span"
              textStyle="span"
              fontWeight="bold"
              lineHeight={0}
              color={span}
            >
              ({i === 0 ? "minimum" : "maximum"})
            </Text>
          </Flex>
        );
      })}
    </Flex>
  );
};
