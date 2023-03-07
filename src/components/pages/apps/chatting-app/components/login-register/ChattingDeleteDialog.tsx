import React from "react";
import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
} from "@chakra-ui/react";
import { ChattingDeleteDialogProps } from "schemas/apps/ChattingAppSchema";

export const ChattingDeleteDialog = (props: ChattingDeleteDialogProps) => {
  const { isOpen, cancelRef, onClose, item, handleDeleteOnClick, msg } = props;
  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {item ? `Delete ${item}` : `Confirm ${msg}`}
          </AlertDialogHeader>

          <AlertDialogBody>
            Are you sure you want to {msg.toLowerCase()}?
          </AlertDialogBody>

          <AlertDialogFooter gap={2}>
            <Button
              color="white"
              bg="crimson"
              onClick={handleDeleteOnClick}
              ml={3}
              _hover={{ bg: "red", color: "gray.100" }}
            >
              Confirm
            </Button>
            <Button ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};
