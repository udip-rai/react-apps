import { Center, useToast } from "@chakra-ui/react";
import {
  InputName,
  InputEmail,
  InputPassword,
  SubmitButton,
} from "components/form";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  chatting_app_auth,
  chatting_app_db,
} from "components/firebase/chatting-app-firebase";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TOAST_ERROR_MSG } from "utils/constants";

const schema = yup
  .object()
  .shape({
    name: yup.string().required().min(3).max(30),
    email: yup.string().required().email().max(50),
    password: yup.string().required().min(3).max(30),
  })
  .required();

export const ChattingRegister = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data: any) => {
    try {
      const result = await createUserWithEmailAndPassword(
        chatting_app_auth,
        data.email,
        data.password
      );

      await setDoc(doc(chatting_app_db, "users", result.user.uid), {
        uid: result.user.uid,
        name: data.name,
        email: data.email,
        createdAt: Timestamp.fromDate(new Date()),
        isOnline: true,
      });
      navigate("/apps/chatting-app/welcome");
    } catch (err) {
      toast(TOAST_ERROR_MSG(err));
    }
  };

  const formProps = { register, errors };

  return (
    <Center className="chatting-register chatting-form" h="calc(100vh - 140px)">
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputName {...formProps} />
        <InputEmail {...formProps} />
        <InputPassword {...formProps} />
        <SubmitButton title="Register" isLoading={isSubmitting} />
      </form>
    </Center>
  );
};
