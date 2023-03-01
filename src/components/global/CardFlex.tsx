import { Button, Center, Flex, Image, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { CardFlexProps } from "schemas/GlobalSchema";

export const CardFlex = (props: CardFlexProps) => {
  const { title, img, href } = props;

  return (
    <Flex className="card-flex">
      <Center>
        <Image
          className="remove-blur"
          src={require(`assets/images/${img}`)}
          alt={title}
        />
      </Center>
      <NavLink to={href}>
        <Button className="card-btn">
          <Text>{title}</Text>
        </Button>
      </NavLink>
    </Flex>
  );
};
