import { Grid, useToast } from "@chakra-ui/react";
import { CustomSpinner } from "components/animations";
import { useEffect, useRef, useState } from "react";
import { WeatherCurrent } from "./components/current/WeatherCurrent";
import { WeatherForecast } from "./components/forecast/WeatherForecast";
import { WeatherHighlight } from "./components/highlight/WeatherHighlight";
import {
  kelvinToC,
  kelvinToF,
  unixToTimeStamp,
  findWeatherIcon,
} from "utils/logic";
import { trimAndCapitalize } from "utils/logic/trimAndCapitalize";
import { INVALID_CITY, VALID_CITY } from "utils/constants";
import {
  detailsSampleJson,
  testCitiesJson,
  allCitiesJson,
  cityJson,
} from "data/apps/weather-app/json";
import { useComponentVisible } from "hooks/useComponentVisible";

export const WeatherApp = () => {
  const [details, setDetails] = useState<any>(detailsSampleJson);
  const [loading, setLoading] = useState<Boolean>(true);
  const [degree, setDegree] = useState<string>("C");
  const [inputChange, setInputChange] = useState<any>("");
  const [inputDelay, setInputDelay] = useState<string>("");
  const [displayInput, setDisplayInput] = useState<string>("");
  const [suggestionBox, setSuggestionBox] = useState<any>("");
  const didMountRef = useRef<any>(false);
  const toast = useToast();
  const { sgRef, setIsComponentVisible, isComponentVisible } =
    useComponentVisible(true);

  console.log(sgRef);
  console.log(isComponentVisible);

  const handleDegree = (val: number) =>
    degree === "C" ? kelvinToC(val) : degree === "F" ? kelvinToF(val) : "error";

  const handleTypedSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const inputVal = trimAndCapitalize(e?.currentTarget?.value);

      // Checking if the entered city exists or not
      const filteredArr: any = testCitiesJson
        .slice(0, 1)
        .map((item) => item)[0];

      filteredArr.name === inputVal
        ? console.log("success")
        : console.log("Error");
    }
  };

  const handleInputDelay = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setInputDelay(e?.currentTarget?.value);
    if (e.key === "Enter") {
      const inputVal = trimAndCapitalize(e?.currentTarget?.value);

      // Checking if the entered city exists or not
      const filteredArr: any = testCitiesJson
        .slice(0, 1)
        .map((item) => item)[0];

      if (filteredArr.name === inputVal) {
        setInputDelay(inputVal);
        setDisplayInput(inputVal);

        toast(VALID_CITY);
      } else {
        toast(INVALID_CITY);
      }
    }
  };

  const handleInputSearch = (inputDelay: string) => {
    const allCities = Object.values(allCitiesJson).flat(1);

    const filtered = allCities?.filter(
      (item) =>
        item.slice(0, inputDelay.length).toLowerCase() ===
        inputDelay.toLowerCase()
    );
    setSuggestionBox(filtered);
    setInputChange(inputDelay);
  };

  const handleSuggestion = (e: any) => {
    const target = e?.currentTarget?.innerHTML;
    setInputDelay(target);
    setDisplayInput(target);
  };

  useEffect(() => {
    const timeoutId: any = setTimeout(() => handleInputSearch(inputDelay), 500);
    return () => clearTimeout(timeoutId);
  }, [inputDelay]);

  //     const OPEN_WEATHER_API_KEY = "b16e8052123fdc3a0619203be72674d8",
  //       getCordURL = `http://api.openweathermap.org/geo/1.0/direct?q=${CITY_NAME}&limit=1&appid=${OPEN_WEATHER_API_KEY}`;

  //     const loadWeather = async () => {
  //       setLoading(false);
  //       const response1 = await axios.get(getCordURL),
  //         coordinates = response1.data,
  //         lat = coordinates[0].lat,
  //         lon = coordinates[0].lon;

  //       const getDetailsURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}`,
  //         response2 = await axios.get(getDetailsURL);
  //       setWeatherDetails(response2.data);
  //       setLoading(false);
  //     };

  //     loadWeather();

  // console.log(weatherJson);

  const lat = details?.lat,
    lon = details?.lon,
    temperature = handleDegree(details?.current?.temp),
    current = details?.current,
    daily = details?.daily,
    timezone = details?.timezone,
    datetime = unixToTimeStamp(details?.current?.dt),
    time = unixToTimeStamp(details?.current?.dt)?.time,
    currentIcon = findWeatherIcon(details?.current?.weather[0]?.icon)[0],
    dailyIcon = findWeatherIcon(details?.daily[0]?.weather[0]?.icon)[0],
    hourlyIcon = findWeatherIcon(details?.hourly.at(-1)?.weather[0]?.icon)[0],
    accuratePlace = `${cityJson?.locality}, ${cityJson?.localityInfo?.administrative[3]?.name}, ${cityJson?.countryName}`;

  const weatherCurrent = {
      degree,
      inputDelay,
      inputChange,
      displayInput,
      setInputChange,
      handleTypedSearch,
      handleInputDelay,
      suggestionBox,
      handleSuggestion,
      sgRef,
      isComponentVisible,
      setIsComponentVisible,
      temperature,
      datetime,
      time,
      currentIcon,
      dailyIcon,
      hourlyIcon,
      accuratePlace,
    },
    weatherForecast = { daily, degree, setDegree, handleDegree },
    weatherHighlight = {
      ...current,
      ...daily[0],
      degree,
      handleDegree,
      timezone,
    };

  return (
    <>
      {!loading ? (
        <CustomSpinner />
      ) : (
        <Grid
          className="weather-app"
          templateAreas={{
            xs: `"current" "forecast" "highlight"`,
            md: `"current forecast" "current highlight"`,
          }}
          gridTemplateRows={{
            xs: "140px 140px 1fr",
            md: "190px calc(100% - 190px)",
          }}
          gridTemplateColumns={{ xs: "100%", md: "300px calc(100% - 300px)" }}
        >
          <WeatherCurrent {...weatherCurrent} />
          <WeatherForecast {...weatherForecast} />
          <WeatherHighlight {...weatherHighlight} />
        </Grid>
      )}
    </>
  );
};
