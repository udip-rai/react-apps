// Weather App

export type WeatherCurrentLocationProps = {
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

export type WeatherCurrentSituationProps = {
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
  currentDay: any;
  dailyDay: any;
  degree: string;
  handleDegree: any;
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
  temp: string;
  datetime: any;
  currentIcon: any;
  dailyIcon: any;
  hourlyIcon: any;
  accuratePlace: string;
};

export type WeatherDayStatsProps = {
  monthDay: string;
  day: string;
  temp: string;
  degree: string;
  img: string;
  myColors: any;
};

export type WeatherHighlightSunProps = {
  sunMoonToday: any;
  diff: any;
};

export type WeatherCurrentDateTempProps = {
  temp: string;
  datetime: any;
  degree: string;
};

export type WeatherHightlightSingleProps = {
  title: string;
  unit: string;
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

export type WeatherCurrentInfoProps = {
  msg: string | undefined;
  relative: string;
};

export type WeatherCurrentImgProps = {
  name: string;
  img: string;
  msg: string;
};

export type WeatherForecastProps = {
  dailyDay: any;
  degree: string;
  setDegree: any;
  handleDegree: any;
};
