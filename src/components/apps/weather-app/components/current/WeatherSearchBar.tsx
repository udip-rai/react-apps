import {
  Input,
  InputGroup,
  InputLeftElement,
  GridItem,
} from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";

export type OnKeyDownType = React.KeyboardEvent<HTMLInputElement>;

export const WeatherSearchBar = (props: any) => {
  const { typedSearch, handleTypedSearch, setTypedSearch } = props;
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
          placeholder="Search city.."
          onKeyDown={(e: any) => handleTypedSearch(e)}
        />
      </InputGroup>
    </GridItem>
  );
};
