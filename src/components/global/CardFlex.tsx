import { Button, Center, Flex, Image, Text } from "@chakra-ui/react";
import { InfoTooltip } from "components/animations";
import { NavLink } from "react-router-dom";
import { CardFlexProps } from "schemas/GlobalSchema";

export const CardFlex = (props: CardFlexProps) => {
  const { title, img, href, details } = props;

  return (
    <Flex className="card-flex">
      <Center>
        <InfoTooltip details={details}>
          <Image
            className="remove-blur"
            src={require(`assets/images/${img}`)}
            alt={title}
          />
        </InfoTooltip>
      </Center>
      <NavLink to={href}>
        <Button className="card-btn">
          <Text>{title}</Text>
        </Button>
      </NavLink>
    </Flex>
  );
};
