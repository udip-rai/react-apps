export const shortenLocationName = (str: string) => {
  if (str.indexOf(",") >= 0) {
    const arr: string[] = str.split(",");
    arr.splice(-1, 1);
    return arr.join(",");
  } else {
    return str;
  }
};
