import weatherConditons from "data/apps/weather-app/weatherCondition.json";

export const findWeatherIcon: any = (val: string) => {
  return weatherConditons[0]?.filter((item) => item.name === val);
};
