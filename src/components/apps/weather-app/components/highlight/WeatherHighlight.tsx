import { GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import { WeatherHighlightProps } from "schemas/apps/WeatherAppSchema";
import { unixToTimeStamp, compareWeather } from "utils/logic";
import { pickMonster } from "utils/logic/pickMonster";
import weatherHighlightsJson from "data/apps/weather-app/weather.json";
import { WeatherHighlightSun } from "./WeatherHighlightSun";
import { WeatherHighlightTemp } from "./WeatherHighlightTemp";
import { WeatherHightlightSingle } from "./WeatherHightlightSingle";

export const WeatherHighlight = (props: WeatherHighlightProps) => {
  const weatherHighlights = weatherHighlightsJson[0].map((item) =>
    Object.values(item).map((item1, i) => item1[i])
  );
  const {
    degree,
    handleDegree,
    humidity,
    sunrise,
    sunset,
    wind_speed: wind,
    temp,
    visibility,
    uvi,
    moonrise,
    moonset,
    timezone,
  } = props;

  const sunriseTime = unixToTimeStamp(sunrise)?.time,
    sunsetTime = unixToTimeStamp(sunset)?.time,
    moonriseTime = unixToTimeStamp(moonrise)?.time,
    moonsetTime = unixToTimeStamp(moonset)?.time,
    minTemp = handleDegree(temp.min),
    maxTemp = handleDegree(temp.max),
    minMax = { minTemp, maxTemp },
    unit = degree === "C" ? "C" : "F";

  const highlightSun = {
      sunriseTime,
      sunsetTime,
      moonriseTime,
      moonsetTime,
    },
    highlightTemp = { minMax, unit, timezone },
    highlightSingle = [
      ["wind", wind],
      ["humidity", humidity],
      ["visibility", visibility],
      ["uvi", uvi],
    ];

  const handleMonster = (arr: any[]) => {
    const currentStatus = compareWeather(arr[0], arr[1]);
    return pickMonster(currentStatus[1]);
  };

  return (
    <GridItem className="weather-highlight scrollbar-one" area="highlight">
      <Text textStyle="header">Today's Highlight</Text>
      <SimpleGrid
        className="weather-highlight-grids"
        minChildWidth={260}
        spacing="40px"
      >
        <WeatherHighlightSun {...highlightSun} />
        <WeatherHighlightTemp {...highlightTemp} />
        {weatherHighlights.map((item, i: number) => {
          return (
            <WeatherHightlightSingle
              key={Date.now() + Math.random()}
              single={item[0].single[0]}
              slider={item[0].slider[0]}
              highlight={highlightSingle[i]}
              monster={handleMonster(highlightSingle[i])}
            />
          );
        })}
      </SimpleGrid>
    </GridItem>
  );
};
