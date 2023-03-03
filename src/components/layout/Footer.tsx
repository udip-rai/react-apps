import { useContext } from "react";
import { Center, Image, Text, Tooltip } from "@chakra-ui/react";
import { CustomColorsContext } from "context";
import { NavLink } from "react-router-dom";
import { mocking_img } from "assets/images/police";

export const Footer = () => {
  const { myColors } = useContext(CustomColorsContext);
  return (
    <Center className="footer" w="full" h="full">
      <Text fontSize="xl">
        <NavLink to="https://github.com/udip-rai">
          <Tooltip
            bg="transparent"
            label={<Image src={mocking_img} boxSize="100px" />}
          >
            <Text
              as="span"
              color={myColors?.crimson_orange}
              _hover={{ color: "good_blue" }}
            >
              Udip
            </Text>
          </Tooltip>
        </NavLink>
        &nbsp;&copy; Happy Coding &#127475;&#127477;
      </Text>
    </Center>
  );
};
