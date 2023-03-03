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
  Image,
  Badge,
} from "@chakra-ui/react";
import { yawn_img, mocking_img } from "assets/images/police";
import { BsChevronDown } from "react-icons/bs";
import { showFromMd } from "utils/constants";

export const WeatherForecastMenu = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        <Center className="justify-between">
          <Avatar src={mocking_img} bg="teal">
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
        <MenuItem flexDirection="column" alignSelf="center">
          <Image boxSize="120px" src={yawn_img} />
          <Badge variant="solid" colorScheme="green">
            Happy Coding Mr. Stranger !
          </Badge>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
