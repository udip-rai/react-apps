import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Box,
} from "@chakra-ui/react";
import { FormInputProps } from "schemas/FormSchema";

export const InputEmail = (props: FormInputProps) => {
  const { register, errors } = props;
  const errorMsg = errors.email && errors.email?.message.toString();
  const errorMsg1 = errorMsg?.charAt(0).toUpperCase() + errorMsg?.slice(1);

  return (
    <Box h="100px" w="300px">
      <FormControl isInvalid={Boolean(errors.email)}>
        <FormLabel htmlFor="email">Email Address</FormLabel>
        <Input {...register("email")} placeholder="min 8 max 50" />
        <FormErrorMessage mt={1}>{errorMsg1}</FormErrorMessage>
      </FormControl>
    </Box>
  );
};
