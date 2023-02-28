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
      <Text fontSize="lg" fontWeight="bold" position="absolute" right={0}>
        Udip
        <br />
        <Text as="span">Rai</Text>
      </Text>
    </Flex>
  );
};
