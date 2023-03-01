import { Flex, Text } from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";
import { useContext } from "react";
import { readableString } from "utils/logic";
import { CustomColorsContext } from "context";
import { ColorModeSwitcher } from "components/buttons/ColorModeSwitcher";
import { NavLogo } from "./components/NavLogo";

export const Header = () => {
  const { myColors } = useContext(CustomColorsContext),
    location = useLocation(),
    title = location.pathname.split("/").pop(),
    newTitle = readableString(title!, "-");

  return (
    <Flex className="header">
      <NavLogo />

      <NavLink to="/">
        <Text textStyle="title">{newTitle}</Text>
      </NavLink>

      <ColorModeSwitcher />
    </Flex>
  );
};
