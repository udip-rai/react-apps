import { GridItem, Grid } from "@chakra-ui/react";
import { WeatherCurrentCondition } from "./WeatherCurrentCondition";
import { WeatherCurrentImg } from "./WeatherCurrentImg";
import { WeatherSearchBar } from "./WeatherSearchBar";

export const WeatherCurrent = (props: any) => {
  return (
    <GridItem className="weather-current" area="current">
      <Grid className="weather-current-grid">
        <WeatherSearchBar {...props} />
        <WeatherCurrentImg {...props.currentIcon} />
        <WeatherCurrentCondition {...props} />
      </Grid>
    </GridItem>
  );
};