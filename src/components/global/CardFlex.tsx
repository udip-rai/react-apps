import { Button, Center, Flex, Image, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { CardFlexProps } from "schemas/apps/GlobalSchema";

export const CardFlex = (props: CardFlexProps) => {
  const { title, img, href } = props;

  return (
    <Flex className="card-flex">
      <Text textStyle="p">{title}</Text>
      <Center>
        <Image
          className="remove-blur"
          src={require(`assets/images/${img}`)}
          alt={title}
        />
      </Center>
      <NavLink to={href}>
        <Button className="card-btn">
          <Text textStyle="span">See more</Text>
        </Button>
      </NavLink>
    </Flex>
  );
};
