import { Grid } from "@chakra-ui/react";
import { CustomSpinner } from "components/animations";
import { useEffect, useState } from "react";
import { WeatherCurrent } from "./components/current/WeatherCurrent";
import { WeatherForecast } from "./components/forecast/WeatherForecast";
import { WeatherHighlight } from "./components/highlight/WeatherHighlight";
import { detailsSampleJson, cityJson } from "data/apps/weather-app/json";
import { useComponentVisible } from "hooks/useComponentVisible";
import { getWeatherDetails } from "data/apps/weather-app/api/WeatherData";

export const WeatherApp = () => {
  const [details, setDetails] = useState<any>(detailsSampleJson);
  const [cityDetail, setCityDetail] = useState<any>(cityJson);
  const [loading, setLoading] = useState<boolean>(true);
  const [degree, setDegree] = useState<string>("C");
  const { sgRef, setIsComponentVisible, isComponentVisible } =
    useComponentVisible(false);

  // Required values from API
  const { currentProps, forecastProps, highlightProps } = getWeatherDetails(
    details,
    degree,
    setDegree,
    cityDetail
  );

  // Required state values, setStates, refs, etc.
  const weatherCurrent = {
    loading,
    setLoading,
    sgRef,
    isComponentVisible,
    setIsComponentVisible,
    cityDetail,
    setDetails,
    setCityDetail,
  };

  useEffect(() => {
    setLoading(false);
    // console.log("details", details);
  }, []);

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
