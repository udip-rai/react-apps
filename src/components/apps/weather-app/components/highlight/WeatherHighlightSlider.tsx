import {
  Slider,
  SliderTrack,
  useColorModeValue,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";
import { WeatherHighlightSliderProps } from "schemas/apps/WeatherAppSchema";

export const WeatherHighlightSlider = (props: WeatherHighlightSliderProps) => {
  const { min, max, default1, color } = props;
  const newColor = color.split(".")[0],
    lightColor = newColor + ".200",
    darkColor = newColor + ".100";
  return (
    <Slider
      aria-label="Weather Slider"
      orientation="vertical"
      defaultValue={default1}
      min={min}
      max={max}
      minH={32}
    >
      <SliderTrack
        w="1.5rem"
        borderRadius="1.5rem"
        bg={useColorModeValue(lightColor, darkColor)}
      >
        <SliderFilledTrack bg={newColor + ".400"} />
      </SliderTrack>
      <SliderThumb boxSize="1.5rem" />
    </Slider>
  );
};
