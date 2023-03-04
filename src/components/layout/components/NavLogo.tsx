import { Flex, Image, Text, Center } from "@chakra-ui/react";
import { laptop_img } from "assets/images/home";
import { CustomColorsContext } from "context";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

export const NavLogo = () => {
  const { myColors } = useContext(CustomColorsContext);
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
        left="42px"
        top="10px"
        lineHeight="18px"
      >
        UDIP
        <Text as="span" color={myColors?.sky_red}>
          RAI
        </Text>
      </Text>
    </Flex>
  );
};
