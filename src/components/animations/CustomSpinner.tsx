import { Center, Spinner, Text } from "@chakra-ui/react";

export const CustomSpinner = () => {
  return (
    <Center h="calc(100vh - 140px)" flexDir="column" gap={0.5}>
      <Spinner
        thickness="5px"
        speed="0.99s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
      <Text>Loading</Text>
    </Center>
  );
};
