import { GridItem, Grid } from "@chakra-ui/react";
import { WeatherCurrentCondition } from "./WeatherCurrentCondition";
import { WeatherCurrentImg } from "./WeatherCurrentImg";
import { WeatherCurrentSearch } from "./WeatherCurrentSearch";

export const WeatherCurrent = (props: any) => {
  const { weatherCurrent, currentProps } = props;
  return (
    <GridItem className="weather-current" area="current">
      <Grid className="weather-current-grid">
        <WeatherCurrentSearch {...weatherCurrent} />
        <WeatherCurrentImg {...currentProps.currentIcon} />
        <WeatherCurrentCondition {...currentProps} />
      </Grid>
    </GridItem>
  );
};
