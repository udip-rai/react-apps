import { Menu, MenuButton, Avatar, MenuList, MenuItem } from "@chakra-ui/react";

export const ChattingBoxHeaderMenu = () => {
  return (
    <Menu>
      <MenuButton>
        <Avatar
          p={2}
          boxSize="50px"
          src="https://avatars.githubusercontent.com/u/123292110?v=4"
        />
      </MenuButton>
      <MenuList>
        <MenuItem as="a" href="#">
          Link 1
        </MenuItem>
        <MenuItem as="a" href="#">
          Link 2
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
