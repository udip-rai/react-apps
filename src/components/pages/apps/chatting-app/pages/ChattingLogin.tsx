import { Center, useToast } from "@chakra-ui/react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { updateDoc, doc } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputEmail, InputPassword, SubmitButton } from "components/form";
import {
  chatting_app_auth,
  chatting_app_db,
} from "components/firebase/chatting-app-firebase";
import { TOAST_ERROR_MSG } from "utils/constants";

const schema = yup
  .object()
  .shape({
    email: yup.string().required().email().max(50),
    password: yup.string().required().min(3).max(30),
  })
  .required();

export const ChattingLogin = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data: any) => {
    try {
      const result = await signInWithEmailAndPassword(
        chatting_app_auth,
        data.email,
        data.password
      );

      await updateDoc(doc(chatting_app_db, "users", result.user.uid), {
        isOnline: true,
      });

      navigate("/apps/chatting-app/welcome");
    } catch (err) {
      toast(TOAST_ERROR_MSG(err));
    }
  };

  const formProps = { register, errors };

  return (
    <Center className="chatting-login chatting-form" h="calc(100vh - 140px)">
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputEmail {...formProps} />
        <InputPassword {...formProps} />
        <SubmitButton title="Login" isLoading={isSubmitting} />
      </form>
    </Center>
  );
};
