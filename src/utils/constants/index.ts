// Display stylings
export const showFromMd = ["none", "none", "block"];
export const hideFromMd = ["block", "block", "none"];
export const showFromLg = ["none", "none", "none", "block"];
export const hideFromLg = ["block", "block", "block", "none"];
export const iconSize = ["18px", "18px", "18px", "25px"];
// export const WeatherAppHeight = [
//   "auto",
//   "auto",
//   "auto",
//   "calc(100vh - 70px - 70px)",
// ];

export const Z_INDEX = [0, 1, 10];
export const ALLOWED_IMG_FORMAT = ["jpg", "jpeg", "png"];

// Toast Messages
export const TOAST_ERROR_MSG: any = (err: any) => {
  return {
    title: err.toString(),
    description: "Please input proper value(s).",
    status: "error",
    duration: 5000,
    isClosable: true,
    position: "top",
  };
};

export const VALID_CITY: any = {
  title: "Success! Valid place.",
  description: "Your details have been presented as is.",
  status: "success",
  duration: 5000,
  isClosable: true,
  position: "top",
};

export const INVALID_CITY: any = {
  title: "Error! Invalid place.",
  description: "Please input a proper city name.",
  status: "error",
  duration: 5000,
  isClosable: true,
  position: "top",
};
