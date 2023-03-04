import { Flex } from "@chakra-ui/react";
import { CustomIconButton } from "components/buttons/CustomIconButton";
import { GrMenu } from "react-icons/gr";
import { IsSidebarOpenProps } from "schemas/apps/ChattingAppSchema";
import { ChattingBoxHeaderMenu } from "..";

export const ChattingBoxHeader = (props: IsSidebarOpenProps) => {
  const { isSidebarOpen, setIsSidebarOpen } = props;

  const openMenuProps = {
    label: "Open Menu",
    icon: <GrMenu />,
    color: "black",
    left: 0,
    handleClick: () => setIsSidebarOpen(!isSidebarOpen),
  };

  return (
    <Flex height="50px" justifyContent="space-between" alignItems="center">
      <CustomIconButton {...openMenuProps} />
      <ChattingBoxHeaderMenu />
    </Flex>
  );
};
