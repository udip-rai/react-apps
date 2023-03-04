import { Flex, List, ListIcon, ListItem, Tooltip } from "@chakra-ui/react";
import { CustomColorsContext } from "context";
import { useContext } from "react";
import { FaReact } from "react-icons/fa";
import {
  InfoTooltipLabelProps,
  InfoTooltipProps,
} from "schemas/AnimationSchema";

const InfoTooltipLabel = (props: InfoTooltipLabelProps) => {
  return (
    <Flex flexDirection="column">
      <List spacing={1}>
        {props?.details?.map((item: string) => {
          return (
            <ListItem key={item} display="flex" alignItems="center">
              <ListIcon
                as={FaReact}
                color="azure"
                boxSize="25px"
                borderRadius="2rem"
              />
              {item}
            </ListItem>
          );
        })}
      </List>
    </Flex>
  );
};

export const InfoTooltip = (props: InfoTooltipProps) => {
  const { myColors } = useContext(CustomColorsContext);
  const { children, details, isLabelOpen } = props;

  const props1 = { details };

  return (
    <Tooltip
      isOpen={isLabelOpen}
      hasArrow
      arrowSize={12}
      py={2}
      px={3}
      top={4}
      borderRadius="20px"
      placement="top"
      label={<InfoTooltipLabel {...props1} />}
      bg={myColors?.paragraph}
      color={myColors?.lighter}
    >
      {children}
    </Tooltip>
  );
};
