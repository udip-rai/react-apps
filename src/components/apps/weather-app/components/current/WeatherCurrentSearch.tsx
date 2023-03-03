import {
  Input,
  InputGroup,
  InputLeftElement,
  GridItem,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { WeatherCurrentSuggestion } from "./WeatherCurrentSuggestion";
import { allCitiesJson as citiesToFilterJson } from "data/apps/weather-app/json";
import { trimAndCapitalize } from "utils/logic/trimAndCapitalize";
import { TOAST_ERROR_MSG, VALID_CITY } from "utils/constants";

export type OnKeyDownType = React.KeyboardEvent<HTMLInputElement>;

export const WeatherCurrentSearch = (props: any) => {
  const {
    sgRef,
    isComponentVisible,
    setIsComponentVisible,
    setLoading,
    setCityDetail,
    setDetails,
  } = props;
  const [inputQuery, setInputQuery] = useState<string>("");
  const [timer, setTimer] = useState<any>(null);
  const [suggestionBox, setSuggestionBox] = useState<any>("");

  // Converted 2d array to 1d from the custom json file
  const citiesToFilter = Object.values(citiesToFilterJson).flat(1);

  const toast = useToast();

  const getCoordinatesAPI = async (inputVal: string) => {
    try {
      const response1 = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${inputVal}&limit=1&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
      );
      const coordinates = response1.data,
        lat = coordinates[0].lat,
        lon = coordinates[0].lon;

      const response2 = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
      );

      const response3 = await axios.get(
        `https://api-bdc.net/data/reverse-geocode?latitude=${lat}&longitude=${lon}&localityLanguage=en&key=${process.env.REACT_APP_BIGDATA_API_KEY}`
      );
      setDetails(response2.data);
      setCityDetail(response3.data);
      setLoading(false);
      setIsComponentVisible(false);
      toast(VALID_CITY);
    } catch (err: any) {
      toast(TOAST_ERROR_MSG(err));
      setLoading(false);
    }
  };
  /////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////

  const handleInputQuery = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const value = trimAndCapitalize(event?.currentTarget?.value);

    if (timer) {
      clearTimeout(timer);
      setTimer(null);
    }

    setTimer(setTimeout(() => handleMain(value), 500));

    const handleMain = (value: string) => {
      // Filter the value that you type and display them in suggestion box
      const filtered = citiesToFilter?.filter(
        (item: any) =>
          item.slice(0, value.length).toLowerCase() === value.toLowerCase()
      );

      setSuggestionBox(filtered);

      if (event.key === "Enter") {
        setLoading(true);
        getCoordinatesAPI(value);
      }
    };
  };

  const currentSuggestion = {
    sgRef,
    setIsComponentVisible,
    isComponentVisible,
    suggestionBox,
    setInputQuery,
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
          key={inputQuery}
          defaultValue={inputQuery}
          placeholder="Search city/place.."
          onKeyUp={(e: any) => handleInputQuery(e)}
          onClick={() => setIsComponentVisible(true)}
        />
      </InputGroup>

      <WeatherCurrentSuggestion {...currentSuggestion} />
    </GridItem>
  );
};
