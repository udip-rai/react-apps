import { GridItem, Flex, Image } from "@chakra-ui/react";
import { WeatherCurrentImgProps } from "schemas/apps/WeatherAppSchema";
import { WeatherCurrentInfo } from "./WeatherCurrentInfo";

export const WeatherCurrentImg = (props: WeatherCurrentImgProps) => {
  const { name, img, msg } = props,
    relative = "current",
    info = { msg, relative };

  return (
    <GridItem
      className="weather-current-img"
      rowSpan={[1, 1, 1, 1]}
      colSpan={[2, 2, 2, 1]}
    >
      <Flex flexDirection="column" gap={0}>
        <WeatherCurrentInfo {...info} />
        <Image
          src={require(`assets/images/apps/weather-app/${img}`)}
          alt={name}
        />
      </Flex>
    </GridItem>
  );
};
