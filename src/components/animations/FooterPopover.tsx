import {
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  Image,
} from "@chakra-ui/react";
import { mocking_img } from "assets/images/police";
import { CustomColorsContext } from "context";
import { useContext } from "react";
import { CustomPopoverProps } from "schemas/AnimationSchema";

export const FooterPopover = (props: CustomPopoverProps) => {
  const { children } = props;
  const { myColors } = useContext(CustomColorsContext);
  return (
    <Popover arrowSize={13} placement="top">
      <PopoverTrigger>
        <Button p={0} bg="transparent" _hover={{ bg: "transparent" }}>
          {children}
        </Button>
      </PopoverTrigger>
      <PopoverContent boxSize="100px">
        <PopoverArrow bg={myColors?.common} />
        <PopoverCloseButton right={0.5} />

        <PopoverBody p={0} bg={myColors?.common}>
          <Image src={mocking_img} boxSize="100px" />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
