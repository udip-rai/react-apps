import { Flex, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { readableString } from "utils/logic";
import { ColorModeSwitcher } from "components/buttons/ColorModeSwitcher";
import { NavLogo } from "./components/NavLogo";

export const Header = () => {
  const location = useLocation(),
    title = location.pathname.split("/").pop(),
    newTitle = readableString(title!, "-");

  return (
    <Flex className="header">
      <NavLogo />
      <Text textStyle="title">{newTitle}</Text>
      <ColorModeSwitcher />
    </Flex>
  );
};
