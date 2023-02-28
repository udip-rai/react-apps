import { useContext } from "react";
import { Center, Text } from "@chakra-ui/react";
import { CustomColorsContext } from "context";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  const { myColors } = useContext(CustomColorsContext);
  return (
    <Center className="footer" w="full" h="full">
      <Text fontSize="xl">
        <NavLink to="https://github.com/udip-rai">
          <Text
            as="span"
            color={myColors?.logo}
            _hover={{ color: "good_blue" }}
          >
            Udip
          </Text>
        </NavLink>
        &nbsp;&copy; Happy Coding &#127475;&#127477;
      </Text>
    </Center>
  );
};
