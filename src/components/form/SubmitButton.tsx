import { Button } from "@chakra-ui/react";
import { SubmitButtonProps } from "schemas/FormSchema";

export const SubmitButton = (props: SubmitButtonProps) => {
  const { isLoading, title } = props;
  return (
    <Button
      colorScheme="teal"
      mt={2}
      isLoading={isLoading}
      type="submit"
      width="100px"
      alignSelf="center"
    >
      {title}
    </Button>
  );
};
