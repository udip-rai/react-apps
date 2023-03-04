import { Flex, GridItem, Text } from "@chakra-ui/react";
import { IsSidebarOpenProps } from "schemas/apps/ChattingAppSchema";
import { FaRegWindowClose } from "react-icons/fa";
import { Z_INDEX } from "utils/constants";
import { CustomIconButton } from "components/buttons/CustomIconButton";

export const ChattingUsers = (props: IsSidebarOpenProps) => {
  const { isSidebarOpen, setIsSidebarOpen } = props;

  const closeButtonProps = {
    label: "Close Menu",
    icon: <FaRegWindowClose />,
    color: "red",
    left: "10px",
    handleClick: () => setIsSidebarOpen(false),
  };
  return (
    <>
      {isSidebarOpen && (
        <GridItem
          bg="violet"
          className="chatting-users"
          area="chatting-users"
          position="absolute"
          zIndex={Z_INDEX[1]}
          w="200px"
          h="calc(100vh - 140px)"
          px={3}
        >
          <Flex justifyContent="space-between" alignItems="center">
            <Text>Users List</Text>
            <CustomIconButton {...closeButtonProps} />
          </Flex>
        </GridItem>
      )}
    </>
  );
};
