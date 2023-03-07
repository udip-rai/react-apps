import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Box,
} from "@chakra-ui/react";
import { FormInputProps } from "schemas/FormSchema";

export const InputName = (props: FormInputProps) => {
  const { register, errors } = props;
  const errorMsg = errors.name && errors.name?.message.toString();
  const errorMsg1 = errorMsg?.charAt(0).toUpperCase() + errorMsg?.slice(1);

  return (
    <Box h="100px" w="300px">
      <FormControl isInvalid={Boolean(errors.name)}>
        <FormLabel htmlFor="name">Full Name</FormLabel>
        <Input {...register("name")} placeholder="min 8 max 30" />
        <FormErrorMessage mt={1} textTransform="capitalize">
          {errorMsg1}
        </FormErrorMessage>
      </FormControl>
    </Box>
  );
};
