import { Grid, useToast } from "@chakra-ui/react";
import { CustomSpinner } from "components/animations";
import { useEffect, useState } from "react";
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
import axios from "axios";

export const WeatherApp = () => {
  const [details, setDetails] = useState<any>(detailsSampleJson);
  const [cities, setCities] = useState<any>(testCitiesJson);
  const [cityDetail, setCityDetail] = useState<any>(cityJson);
  const [loading, setLoading] = useState<Boolean>(true);
  const [degree, setDegree] = useState<string>("C");
  const [inputChange, setInputChange] = useState<any>("");
  const [inputDelay, setInputDelay] = useState<string>("");
  const [displayInput, setDisplayInput] = useState<string>("");
  const [suggestionBox, setSuggestionBox] = useState<any>("");
  const toast = useToast();
  const { sgRef, setIsComponentVisible, isComponentVisible } =
    useComponentVisible(false);

  const handleDegree = (val: number) =>
    degree === "C" ? kelvinToC(val) : degree === "F" ? kelvinToF(val) : "error";

  console.log("cities", cities);

  const handleInputDelay = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setIsComponentVisible(true);
    setInputDelay(e?.currentTarget?.value);
    if (e.key === "Enter") {
      const inputVal = trimAndCapitalize(e?.currentTarget?.value);

      // Checking if the entered city exists or not
      const filteredArr: any = cities.slice(0, 1).map((item: any) => item)[0];

      console.log("filteredArr.name", filteredArr.name);

      if (filteredArr.name === inputVal) {
        setInputDelay(inputVal);
        setDisplayInput(inputVal);
        setLoading(true);
        const getCoordinatesApi = async () => {
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
        };
        getCoordinatesApi();
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
    const getCitiesData = () => {
      axios
        .get(
          `http://api.openweathermap.org/geo/1.0/direct?q=${target}&limit=5&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
        )
        .then((response) => setCities(response.data))
        .catch((err) => console.log(err));
    };
    getCitiesData();
    setLoading(false);
  };

  useEffect(() => {
    const timeoutId: any = setTimeout(() => handleInputSearch(inputDelay), 500);
    setLoading(false);

    return () => clearTimeout(timeoutId);
  }, [inputDelay, displayInput]);

  console.log("details", details);

  const temp = handleDegree(details?.current?.temp),
    datetime = unixToTimeStamp(details?.current?.dt),
    timezone = details?.timezone,
    currentDay = details?.current,
    dailyDay = details?.daily,
    currentIcon = findWeatherIcon(details?.current?.weather[0]?.icon)[0],
    dailyIcon = findWeatherIcon(details?.daily[0]?.weather[0]?.icon)[0],
    hourlyIcon = findWeatherIcon(details?.hourly[6]?.weather[0]?.icon)[0],
    accuratePlace = `${cityDetail?.locality}, ${cityDetail?.localityInfo?.administrative[3]?.name}, ${cityDetail?.countryName}`;

  const weatherCurrent = {
      inputDelay,
      inputChange,
      displayInput,
      setInputChange,
      handleInputDelay,
      suggestionBox,
      handleSuggestion,
      sgRef,
      isComponentVisible,
      setIsComponentVisible,
    },
    currentProps = {
      temp,
      degree,
      datetime,
      currentIcon,
      dailyIcon,
      hourlyIcon,
      accuratePlace,
    },
    forecastProps = { dailyDay, degree, setDegree, handleDegree },
    highlightProps = {
      currentDay,
      dailyDay,
      degree,
      handleDegree,
      timezone,
    };

  return (
    <>
      {loading ? (
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
          <WeatherCurrent
            weatherCurrent={weatherCurrent}
            currentProps={currentProps}
          />
          <WeatherForecast {...forecastProps} />
          <WeatherHighlight {...highlightProps} />
        </Grid>
      )}
    </>
  );
};
