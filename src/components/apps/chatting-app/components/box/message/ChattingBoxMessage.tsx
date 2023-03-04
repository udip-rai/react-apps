import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { MdAddAPhoto } from "react-icons/md";

export const ChattingBoxMessage = () => {
  return (
    <Flex bg="teal" height="50px" justifyContent="center" alignItems="center">
      <Box gap={4} w="full" px={3}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<MdAddAPhoto color="gray.300" />}
          />
          <Input type="text" placeholder="Send a message.." />
        </InputGroup>
      </Box>
    </Flex>
  );
};
