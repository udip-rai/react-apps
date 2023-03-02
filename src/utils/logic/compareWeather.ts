export const compareWeather = (title: string, val: number) => {
  return title === "wind"
    ? compareWindSpeed(val)
    : title === "humidity"
    ? compareHumidity(val)
    : title === "visibility"
    ? compareVisibility(val)
    : title === "uvi"
    ? compareUVI(val)
    : "undefined";
};

const compareUVI = (val: number) => {
  return val <= 2
    ? ["Low", "green.400"]
    : val > 2 && val <= 5
    ? ["Moderate", "yellow.600"]
    : val > 5 && val <= 7
    ? ["High", "orange.400"]
    : ["Very High", "red.500"];
};

const compareWindSpeed = (val: number) => {
  return val <= 1
    ? ["Calm", "green.400"]
    : val > 1 && val <= 5
    ? ["Light Air", "green.400"]
    : val > 6 && val <= 11
    ? ["Light Breeze", "green.400"]
    : val > 12 && val <= 19
    ? ["Gentle Breeze", "yellow.600"]
    : val > 20 && val <= 28
    ? ["Moderate Breeze", "yellow.600"]
    : val > 29 && val <= 38
    ? ["Fresh Breeze", "yellow.600"]
    : val > 38 && val <= 49
    ? ["Strong Breeze", "orange.400"]
    : val > 50 && val <= 61
    ? ["Near Gale", "orange.400"]
    : val > 62 && val <= 74
    ? ["Gale", "orange.400"]
    : val > 75 && val <= 88
    ? ["Strong Gale", "red.500"]
    : val > 89 && val <= 102
    ? ["Storm", "red.500"]
    : val > 103 && val <= 117
    ? ["Violent Storm", "red.500"]
    : ["Hurricane", "red.500"];
};

const compareHumidity = (val: number) => {
  return val <= 30
    ? ["Too dry", "red.400"]
    : val > 30 && val <= 50
    ? ["Moderate", "yellow.600"]
    : val > 50 && val <= 55
    ? ["Best Condition", "green.400"]
    : val > 55 && val <= 65
    ? ["High", "orange.400"]
    : ["Very High", "red.500"];
};

const compareVisibility = (val: number) => {
  return val <= 40
    ? ["Fog", "red.500"]
    : val > 40 && val <= 200
    ? ["Thick Fog", "red.500"]
    : val > 200 && val <= 1000
    ? ["Fog", "orange.400"]
    : val > 1000 && val <= 2000
    ? ["Mist/Haze", "orange.400"]
    : val > 2000 && val <= 4000
    ? ["Poor Visibility", "yellow.600"]
    : val > 4000 && val <= 10000
    ? ["Moderate Visibility", "yellow.600"]
    : val > 10000 && val <= 40000
    ? ["Good Visibility", "green.400"]
    : ["Excellent Visibility", "green.400"];
};
