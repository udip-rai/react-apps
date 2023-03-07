// import { useState } from "react";
// import { Field } from "formik";
// import {
//   Box,
//   FormControl,
//   FormErrorMessage,
//   FormLabel,
//   IconButton,
//   Input,
//   InputGroup,
//   InputRightElement,
// } from "@chakra-ui/react";
// import { validatePassword } from "utils/logic/formValidation";

// export const InputPassword = () => {
//   const [showPwd, setShowPwd] = useState(false);
//   return (
//     <Box height="100px">
//       <Field name="password" validate={validatePassword}>
//         {({ field, form }: any) => {
//           <FormControl
//             isInvalid={form.errors.password && form.touched.password}
//           >
//             <FormLabel>Password</FormLabel>

//             <FormErrorMessage>{form.errors.password}</FormErrorMessage>
//           </FormControl>;
//         }}
//       </Field>
//     </Box>
//   );
// };

import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  IconButton,
  InputGroup,
  InputRightElement,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import { FormInputProps } from "schemas/FormSchema";
import { ImEye, ImEyeBlocked } from "react-icons/im";

export const InputPassword = (props: FormInputProps) => {
  const { register, errors } = props;
  const [showPwd, setShowPwd] = useState<boolean>(false);

  const errorMsg = errors.password && errors.password?.message.toString();
  const errorMsg1 = errorMsg?.charAt(0).toUpperCase() + errorMsg?.slice(1);

  return (
    <Box h="100px" w="300px">
      <FormControl isInvalid={Boolean(errors.password)}>
        <FormLabel htmlFor="name">Password</FormLabel>
        <InputGroup size="md">
          <Input
            {...register("password")}
            type={showPwd ? "text" : "password"}
            placeholder="min 8 max 30"
          />
          <InputRightElement>
            <IconButton
              aria-label="Toggle password icon"
              fontSize="20px"
              minW="20px"
              variant="unstyled"
              h="17px"
              m={0}
              icon={showPwd ? <ImEye /> : <ImEyeBlocked />}
              onClick={() => setShowPwd(!showPwd)}
            />
          </InputRightElement>
        </InputGroup>
        <FormErrorMessage mt={1}>{errorMsg1}</FormErrorMessage>
      </FormControl>
    </Box>
  );
};
