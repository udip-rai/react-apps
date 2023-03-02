import { Box, Text } from "@chakra-ui/react";

export const WeatherCurrentSuggestion = (props: any) => {
  const { suggestionBox, sgRef, isComponentVisible, handleSuggestion } = props;
  // const suggestionRef = useRef<any>(null);

  console.log("sgRef", sgRef);
  console.log("isComponentVisible", isComponentVisible);

  return (
    isComponentVisible && (
      <Box ref={sgRef} className="weather-current-suggestion scrollbar-one">
        {Object.values(suggestionBox)
          .slice(0, 50)
          ?.map((item: any, i: number) => {
            return (
              <Text
                key={Date.now() + i}
                onClick={(e: any) => handleSuggestion(e)}
              >
                {item}
              </Text>
            );
          })}
      </Box>
    )
  );
};