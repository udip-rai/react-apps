import {
  Input,
  InputGroup,
  InputLeftElement,
  GridItem,
} from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import { WeatherCurrentSuggestion } from "./WeatherCurrentSuggestion";

export type OnKeyDownType = React.KeyboardEvent<HTMLInputElement>;

export const WeatherCurrentSearch = (props: any) => {
  const {
    suggestionBox,
    displayInput,
    handleInputDelay,
    handleSuggestion,
    sgRef,
    setIsComponentVisible,
    isComponentVisible,
  } = props;

  const currentSuggestion = {
    sgRef,
    setIsComponentVisible,
    isComponentVisible,
    suggestionBox,
    handleSuggestion,
  };

  return (
    <GridItem
      className="weather-current-searchbar"
      rowSpan={[1, 1, 1, 1]}
      colSpan={[2, 2, 2, 1]}
    >
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={<BiSearch />} />
        <Input
          type="text"
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
            handleInputDelay(e)
          }
          key={displayInput}
          defaultValue={displayInput}
          onClick={() => setIsComponentVisible(true)}
        />
      </InputGroup>

      <WeatherCurrentSuggestion {...currentSuggestion} />
    </GridItem>
  );
};
