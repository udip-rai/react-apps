import { GridItem } from "@chakra-ui/react";
import { IsSidebarOpenProps } from "schemas/apps/ChattingAppSchema";
import { ChattingBoxHeader, ChattingBoxHistory, ChattingBoxMessage } from "./";

export const ChattingBox = (props: IsSidebarOpenProps) => {
  return (
    <GridItem
      bg="purple"
      className="chatting-box"
      area="chatting-box"
      display="flex"
      flexDirection="column"
    >
      <ChattingBoxHeader {...props} />
      <ChattingBoxHistory />
      <ChattingBoxMessage />
    </GridItem>
  );
};
