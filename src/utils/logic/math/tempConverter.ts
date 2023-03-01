export const kelvinToC = (val: number) => {
  return (val - 273.15).toFixed(2);
};

export const kelvinToF = (val: number) => {
  return ((val - 273) * 1.8 + 32).toFixed(2);
};
