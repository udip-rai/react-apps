// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { InputEmail, InputName, SubmitButton } from "components/form";

// const schema = yup
//   .object()
//   .shape({
//     name: yup.string().required().min(3).max(30),
//   })
//   .required();

// export const ReactHookForm = () => {
//   const {
//       register,
//       handleSubmit,
//       formState: { errors, isSubmitting },
//     } = useForm({
//       resolver: yupResolver(schema),
//     }),
//     formProps = { register, errors };

//   return (
//     <form onSubmit={handleSubmit((d) => console.log(d))}>
//       <InputName {...formProps} />
//       <InputEmail {...formProps} />
//       <SubmitButton title="Register" isLoading={isSubmitting} />
//     </form>
//   );
// };

import React from "react";

export const ReactHookForm = () => {
  return <div>ReactHookForm</div>;
};
