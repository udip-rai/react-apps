import {
  kelvinToC,
  kelvinToF,
  unixToTimeStamp,
  findWeatherIcon,
} from "utils/logic";

export const getWeatherDetails = (
  details: any,
  degree: string,
  setDegree: any,
  cityDetail: any
) => {
  const handleDegree = (val: number) =>
      degree === "C"
        ? kelvinToC(val)
        : degree === "F"
        ? kelvinToF(val)
        : "error",
    temp = handleDegree(details?.current?.temp),
    datetime = unixToTimeStamp(details?.current?.dt),
    timezone = details?.timezone,
    currentDay = details?.current,
    dailyDay = details?.daily,
    currentIcon = findWeatherIcon(details?.current?.weather[0]?.icon)[0],
    dailyIcon = findWeatherIcon(details?.daily[0]?.weather[0]?.icon)[0],
    hourlyIcon = findWeatherIcon(details?.hourly[6]?.weather[0]?.icon)[0],
    accuratePlace = `${cityDetail?.locality}, ${cityDetail?.principalSubdivision}, ${cityDetail?.countryName}`;

  const currentProps = {
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

  return { currentProps, forecastProps, highlightProps };
};
