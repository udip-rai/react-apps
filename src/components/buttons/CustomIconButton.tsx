import { IconButton } from "@chakra-ui/react";
import { CustomIconButtonProps } from "schemas/apps/ChattingAppSchema";

export const CustomIconButton = (props: CustomIconButtonProps) => {
  const { label, icon, color, left, handleClick } = props;
  return (
    <IconButton
      aria-label={label}
      icon={icon}
      variant="ghost"
      bg="transparent"
      color={color}
      fontSize="xl"
      left={left}
      onClick={handleClick}
    />
  );
};
