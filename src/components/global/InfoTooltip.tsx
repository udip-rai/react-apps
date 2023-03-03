import { Flex, List, ListIcon, ListItem, Tooltip } from "@chakra-ui/react";
import { CustomColorsContext } from "context";
import { useContext } from "react";
import { FaReact } from "react-icons/fa";

export type InfoTooltipLabelProps = {
  details: string[];
};

interface InfoTooltipProps extends InfoTooltipLabelProps {
  children: any;
}

const InfoTooltipLabel = (props: InfoTooltipLabelProps) => {
  return (
    <Flex flexDirection="column">
      <List spacing={1}>
        {props?.details?.map((item: string) => {
          return (
            <ListItem display="flex" alignItems="center">
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
  const { children, details } = props;

  const props1 = { details };

  return (
    <Tooltip
      hasArrow
      arrowSize={12}
      py={2}
      px={3}
      placement="top"
      label={<InfoTooltipLabel {...props1} />}
      bg={myColors?.paragraph}
      color={myColors?.lighter}
    >
      {children}
    </Tooltip>
  );
};
