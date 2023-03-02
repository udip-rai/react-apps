import { useToast, Button, Wrap, WrapItem } from "@chakra-ui/react";
import { trimAndCapitalize } from "utils/logic/trimAndCapitalize";

export type ToastMessageProps = {
  title: string;
  status: "loading" | "error" | "success" | "info" | "warning";
  description: string;
};

export const ToastMessage = (props: ToastMessageProps) => {
  const toast = useToast();

  const { title, status, description } = props,
    newStatus = trimAndCapitalize(status);

  return (
    <Wrap>
      <WrapItem>
        <Button
          onClick={() =>
            toast({
              title: `${newStatus}!`,
              status: status,
              isClosable: true,
              description: description,
            })
          }
        >
          Show {status} toast
        </Button>
      </WrapItem>
    </Wrap>
  );
};
