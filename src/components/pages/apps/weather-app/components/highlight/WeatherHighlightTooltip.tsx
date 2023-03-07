import { Badge, Flex, Image } from "@chakra-ui/react";
import { sing_img } from "assets/images/police";
import { CustomColorsContext } from "context";
import { useContext } from "react";

export const WeatherHighlightTooltip = () => {
  const { myColors } = useContext(CustomColorsContext);
  return (
    <Flex
      className="weather-highlight-tooltip"
      width="200px"
      h={100}
      justifyContent="center"
      alignItems="center"
      bg={myColors?.common}
      p={2}
      m={0}
    >
      <Flex boxSize="80px">
        <Image src={sing_img} />
      </Flex>
      <Flex flexDirection="column">
        <Badge variant="solid" bg="green" color="gray.50">
          Safe and sound
        </Badge>
        <Badge variant="solid" bg="yellow" color="gray.900">
          Moderate
        </Badge>
        <Badge variant="solid" bg="good_orange" color="gray.900">
          Risky area
        </Badge>
        <Badge variant="solid" bg="red" color="gray.50">
          Danger zone
        </Badge>
      </Flex>
    </Flex>
  );
};
