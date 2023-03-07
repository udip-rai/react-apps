import { Badge, Box, Flex, Image, Text } from "@chakra-ui/react";
import { shocked_img } from "assets/images/police";

export const WeatherCurrentSuggestion = (props: any) => {
  const {
    suggestionBox,
    sgRef,
    isComponentVisible,
    setInputQuery,
    setIsComponentVisible,
  } = props;

  const handleSuggestionBoxOnClick = (e: any) => {
    // When you click on the suggested city in suggestion box,
    // you set the value of the input to the suggested/selected city
    setInputQuery(e?.currentTarget?.innerHTML);
    setIsComponentVisible(false);
  };

  return (
    isComponentVisible && (
      <Box ref={sgRef} className="weather-current-suggestion scrollbar-one">
        {suggestionBox.length ? (
          Object.values(suggestionBox)
            .slice(0, 50)
            ?.map((item: any, i: number) => {
              return (
                <Text
                  key={item + i}
                  onClick={(e: any) => handleSuggestionBoxOnClick(e)}
                >
                  {item}
                </Text>
              );
            })
        ) : (
          <Flex flexDirection={{ xs: "column", md: "row" }} alignItems="center">
            <Image boxSize="80px" src={shocked_img} />
            <Text fontWeight="bold" flex={1} textAlign="center">
              <Badge as="span" variant="solid" bg="white" color="red">
                No such city
              </Badge>
              <br />
              You can still search.
            </Text>
          </Flex>
        )}
      </Box>
    )
  );
};
