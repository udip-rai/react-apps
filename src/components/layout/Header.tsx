import { Flex, Image, Text } from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";
import { useContext } from "react";
import { readableString } from "utils/logic";
import { CustomColorsContext } from "context";
import { ColorModeSwitcher } from "components/buttons/ColorModeSwitcher";
import {
  busy_img,
  copywriting_img,
  website_img,
  web_development_img,
} from "assets/images/others";
import {
  laptop_img,
  programming1_img,
  programming_img,
} from "assets/images/home";
import { NavLogo } from "./sub/NavLogo";

export const Header = () => {
  const { myColors } = useContext(CustomColorsContext),
    location = useLocation(),
    title = location.pathname.split("/").pop(),
    newTitle = readableString(title!, "-");

  return (
    <Flex className="header">
      <NavLogo />

      <NavLink to="/">
        <Text textStyle="h5">{newTitle}</Text>
      </NavLink>

      <ColorModeSwitcher />
    </Flex>
  );
};
