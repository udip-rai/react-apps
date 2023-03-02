import { weatherConditionJson } from "data/apps/weather-app/json";

export const findWeatherIcon: any = (val: string) => {
  // return weatherConditionJson[0]?.filter((item) => item.name === val);

  return weatherConditionJson?.filter((item: any) => item.name === val);
};
