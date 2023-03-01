import { Grid } from "@chakra-ui/react";
import { CustomSpinner } from "components/animations";
import { useRef, useState } from "react";
import { WeatherCurrent } from "./components/current/WeatherCurrent";
import { WeatherForecast } from "./components/forecast/WeatherForecast";
import { WeatherHighlight } from "./components/highlight/WeatherHighlight";

import weatherJson from "data/apps/weather-app/details_sample.json";
import cityDetails from "data/apps/weather-app/city_details.json";
import allCitiesJson from "data/apps/weather-app/all_cities.json";

import {
  kelvinToC,
  kelvinToF,
  unixToTimeStamp,
  findWeatherIcon,
} from "utils/logic";

export const WeatherApp = () => {
  const didMountRef = useRef<any>(false);
  const [details, setDetails] = useState<any>(weatherJson);
  const [loading, setLoading] = useState<Boolean>(true);
  const [degree, setDegree] = useState<string>("C");
  const [typedSearch, setTypedSearch] = useState<any>("");

  const handleDegree = (val: number) =>
    degree === "C" ? kelvinToC(val) : degree === "F" ? kelvinToF(val) : "error";

  const handleTypedSearch = (e: any) => {

    // e.which === 13 ? 
    // const filtered: any = Object.values(allCitiesJson).filter((item) =>
    // item.includes("Kathmandu")
  );

  // console.log(filtered[0].indexOf("Kathmandu"));
    
    // e.which === 13 && setTypedSearch(e?.currentTarget?.value);

  };

  // console.log("Searched stuff :", typedSearch);



  // useEffect(() => {
  //   if (!didMountRef.current) {
  //     didMountRef.current = true;

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
  //   }
  // }, []);

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
    accuratePlace = `${cityDetails?.locality}, ${cityDetails?.localityInfo?.administrative[3]?.name}, ${cityDetails?.countryName}`;

  const weatherCurrent = {
      degree,
      typedSearch,
      handleTypedSearch,
      setTypedSearch,
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
