import { Flex, Image, Text, Center } from "@chakra-ui/react";
import { laptop_img } from "assets/images/home";
import { NavLink } from "react-router-dom";

export const NavLogo = () => {
  return (
    <Flex pos="relative" w="100px">
      <NavLink to="/">
        <Center boxSize="55px">
          <Image boxSize="100%" objectFit="cover" src={laptop_img} />
        </Center>
      </NavLink>
      <Text
        fontSize="lg"
        fontWeight="900"
        position="absolute"
        right="12px"
        lineHeight="18px"
      >
        Udip
        <br />
        <Text as="span" color="red">
          Rai
        </Text>
      </Text>
    </Flex>
  );
};
