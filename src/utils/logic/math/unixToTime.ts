export const unixToTimeStamp = (unix_timestamp: number) => {
  let day: string = "";

  let date = new Date(unix_timestamp * 1000),
    fulldate = date.toLocaleString("default", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    }),
    monthDay = date.toLocaleString("default", {
      month: "short",
      day: "2-digit",
    }),
    dayNumber = date.getDay(),
    hours = date.getHours(),
    minutes = "0" + date.getMinutes(),
    seconds = "0" + date.getSeconds(),
    newHours = hours < 10 ? `0${hours}` : hours,
    newMinutes = parseInt(minutes) < 10 ? `0${minutes}` : minutes,
    newSeconds = parseInt(seconds) < 10 ? `0${seconds}` : seconds,
    time = `${newHours}:${newMinutes.substring(1)}`,
    fulltime = `${newHours}:${newMinutes.substring(1)}:${newSeconds.substring(
      1
    )}`;

  switch (dayNumber) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      break;
  }

  return { time, fulltime, day, fulldate, monthDay };
};
