import { Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ChattingBox } from "../components/box";
import { ChattingUsers } from "../components/users";

export const ChattingWelcome = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const commonProps = { isSidebarOpen, setIsSidebarOpen };

  useEffect(() => {
    setIsSidebarOpen(false);
  }, []);

  return (
    <Grid
      className="chatting-app"
      bg="green"
      maxH="2000px"
      h="100%"
      w="768px"
      margin="0 auto"
      borderRadius="2rem"
      // minH="100vh"
      gridTemplateAreas={`"chatting-users chatting-box" "chatting-users chatting-box"`}
      gridTemplateRows="0 100%"
      gridTemplateColumns="0 100%"
    >
      <ChattingUsers {...commonProps} />
      <ChattingBox {...commonProps} />
    </Grid>
  );
};
