import {
  Menu,
  MenuButton,
  Button,
  Center,
  Avatar,
  AvatarBadge,
  MenuList,
  MenuItem,
  Text,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { showFromMd } from "utils/constants";

export const WeatherForecastMenu = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        <Center className="justify-between">
          <Avatar>
            <AvatarBadge />
          </Avatar>
          <Text display="flex">
            Udip
            <Text as="span" display={showFromMd}>
              &nbsp;Rai
            </Text>
          </Text>
        </Center>
      </MenuButton>
      <MenuList>
        <MenuItem>Happy Coding!</MenuItem>
      </MenuList>
    </Menu>
  );
};
