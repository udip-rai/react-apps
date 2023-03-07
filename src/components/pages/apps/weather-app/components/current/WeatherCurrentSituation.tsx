import { Flex, Image } from "@chakra-ui/react";
import { WeatherCurrentSituationProps } from "schemas/apps/WeatherAppSchema";
import { WeatherCurrentInfo } from "./WeatherCurrentInfo";

export const WeatherCurrentSituation = (
  props: WeatherCurrentSituationProps
) => {
  const { img, msg, relative } = props,
    info = {
      msg,
      relative,
    };

  return (
    <Flex alignItems="center" gap={1}>
      <Image
        boxSize="30px"
        src={require(`assets/images/apps/weather-app/${img}`)}
      />
      <WeatherCurrentInfo {...info} />
    </Flex>
  );
};
