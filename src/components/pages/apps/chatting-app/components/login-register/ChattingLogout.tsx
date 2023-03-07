import { useDisclosure, Badge } from "@chakra-ui/react";
import {
  chatting_app_db,
  chatting_app_auth,
} from "components/firebase/chatting-app-firebase";
import { signOut } from "firebase/auth";
import { updateDoc, doc } from "firebase/firestore";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ChattingDeleteDialog } from "./ChattingDeleteDialog";

export const ChattingLogout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<any>();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await updateDoc(
      doc(chatting_app_db, "users", chatting_app_auth?.currentUser?.uid!),
      {
        isOnline: false,
      }
    );
    await signOut(chatting_app_auth);
    navigate("/apps/chatting-app/login");
  };
  return (
    <>
      <Badge
        p={2}
        variant="solid"
        onClick={onOpen}
        textTransform="capitalize"
        colorScheme="red"
      >
        Logout
      </Badge>

      <ChattingDeleteDialog
        isOpen={isOpen}
        cancelRef={cancelRef}
        onClose={onClose}
        msg="Logout"
        handleDeleteOnClick={handleLogout}
      />
    </>
  );
};
