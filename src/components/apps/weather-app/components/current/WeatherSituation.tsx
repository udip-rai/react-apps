import { Flex, Image } from "@chakra-ui/react";
import { WeatherSituationProps } from "schemas/apps/WeatherAppSchema";
import { WeatherInfo } from "./WeatherInfo";

export const WeatherSituation = (props: WeatherSituationProps) => {
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
      <WeatherInfo {...info} />
    </Flex>
  );
};
