import { GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import { WeatherHighlightProps } from "schemas/apps/WeatherAppSchema";
import { compareWeather, calculateSunMoon } from "utils/logic";
import { pickMonster } from "utils/logic/pickMonster";
import { weatherJson } from "data/apps/weather-app/json";
import { WeatherHighlightSun } from "./WeatherHighlightSun";
import { WeatherHighlightTemp } from "./WeatherHighlightTemp";
import { WeatherHightlightSingle } from "./WeatherHightlightSingle";
import { calculateSunMoonDiff } from "../../../../../utils/logic/calculateSunMoon";

export const WeatherHighlight = (props: WeatherHighlightProps) => {
  const { currentDay, dailyDay, degree, handleDegree, timezone } = props;

  const sunMoonToday = calculateSunMoon(dailyDay[0]),
    diff = calculateSunMoonDiff(dailyDay[0], dailyDay[1]),
    minTemp = handleDegree(dailyDay[0].temp.min),
    maxTemp = handleDegree(dailyDay[0].temp.max),
    minMax = { minTemp, maxTemp },
    unit = degree === "C" ? "C" : "F";

  const highlightSun = {
      sunMoonToday,
      diff,
    },
    highlightTemp = { minMax, unit, timezone },
    highlightSingle = [
      ["wind", currentDay.wind_speed],
      ["humidity", currentDay.humidity],
      ["visibility", currentDay.visibility],
      ["uvi", currentDay.uvi],
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
        {weatherJson?.map((item: any, i: number) => {
          return (
            <WeatherHightlightSingle
              key={item.unit + item.title + i}
              title={item.title}
              unit={item.unit}
              slider={item.slider}
              highlight={highlightSingle[i]}
              monster={handleMonster(highlightSingle[i])}
            />
          );
        })}
      </SimpleGrid>
    </GridItem>
  );
};
