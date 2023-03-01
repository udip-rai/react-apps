import { Flex, Text } from "@chakra-ui/react";
import { CustomColorsContext } from "context";
import { useContext } from "react";
import { WeatherInfoProps } from "schemas/apps/WeatherAppSchema";
import { showFromMd } from "utils/constants";
import { readableString } from "utils/logic";

export const WeatherInfo = (props: WeatherInfoProps) => {
  const { myColors } = useContext(CustomColorsContext),
    { msg, relative } = props,
    description = readableString(msg!, " ");

  return (
    <Flex w="full" justify="space-between" textStyle="xxsText">
      <Text textStyle="xxsText">{description}</Text>
      <Text color={myColors?.span} fontWeight="bold" display={showFromMd}>
        &nbsp;({relative})
      </Text>
    </Flex>
  );
};