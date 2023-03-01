// Weather App

export type WeatherLocationMiniProps = {
  place: string;
  // Will update types later for any
  txtStyle: any;
};

export type WeatherHighlightStatusProps = {
  color?: string;
  msg: string;
};

export type SliderType = {
  min: number;
  max: number;
  default: number;
  color: string;
};

export type WeatherHighlightSliderProps = {
  min: number;
  max: number;
  default1: number;
  color: string;
};

export type SingleHighlightType = {
  title: string;
  unit?: string;
  img: string;
  status: string;
};

export type WeatherSituationProps = {
  img?: string;
  msg?: string;
  relative: string;
};

export type WeatherHighlightTempProps = {
  minMax: any;
  unit: string;
  timezone: string;
};

export type WeatherForecastCircleProps = {
  initial: string;
  myColors: any;
  degree: string;
  setDegree: any;
};

export type WeatherHighlightProps = {
  degree: string;
  handleDegree: any;
  humidity: number;
  sunrise: number;
  sunset: number;
  temp: any;
  uvi: number;
  visibility: number;
  weather: any;
  wind_speed: number;
  moonrise: number;
  moonset: number;
  timezone: string;
};

export type WeatherHighlightMainProps = {
  minMax: any;
  unit: string;
  span: any;
  crimson_green: any;
  setDegree?: any;
};

export type WeatherCurrentProps = {
  degree: string;
  typedSearch: any;
  setTypedSearch: any;
  temperature: string;
  datetime: any;
  currentIcon: any;
  dailyIcon: any;
  hourlyIcon: any;
  accuratePlace: string;
};

export type WeatherDayStatsProps = {
  monthDay: string;
  day: string;
  temperature: string;
  degree: string;
  img: string;
  myColors: any;
};

export type WeatherHighlightSunProps = {
  sunriseTime: string;
  sunsetTime: string;
  moonriseTime: string;
  moonsetTime: string;
};

export type WeatherTempDayTimeProps = {
  temperature: string;
  datetime: any;
  degree: string;
};

export type WeatherHightlightSingleProps = {
  single: SingleHighlightType;
  slider: SliderType;
  highlight: any;
  monster: string;
};

export type WeatherHighlightSingleSunProps = {
  img: string;
  time: string;
  diff: string;
};

export type WeatherIconProps = {
  weatherIcon: any;
};

export type WeatherInfoProps = {
  msg: string | undefined;
  relative: string;
};

export type WeatherCurrentImgProps = {
  name: string;
  img: string;
  msg: string;
};

export type WeatherForecastProps = {
  daily: any;
  degree: string;
  setDegree: any;
  handleDegree: any;
};
