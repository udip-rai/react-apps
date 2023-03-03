import { useContext } from "react";
import { Center, Text } from "@chakra-ui/react";
import { CustomColorsContext } from "context";
import { NavLink } from "react-router-dom";
import { FooterPopover } from "components/animations";

export const Footer = () => {
  const { myColors } = useContext(CustomColorsContext);
  return (
    <Center className="footer" w="full" h="full">
      <Text fontSize="xl">
        <NavLink to="https://github.com/udip-rai">
          <Text
            as="span"
            color={myColors?.crimson_orange}
            _hover={{ color: "good_blue" }}
          >
            Udip
          </Text>
        </NavLink>
      </Text>
      <FooterPopover>
        &nbsp;&copy; Happy Coding &#127475;&#127477;
      </FooterPopover>
    </Center>
  );
};
