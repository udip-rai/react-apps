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
    minuteSec = date.toLocaleString("default", {
      minute: "numeric",
      second: "numeric",
    }),
    dayNumber = date.getDay(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds(),
    minutes1 = "0" + date.getMinutes(),
    seconds1 = "0" + date.getSeconds(),
    newHours1 = hours > 12 ? `${hours - 12}` : hours,
    newHours = newHours1 < 10 ? `0${newHours1}` : newHours1,
    newMinutes = parseInt(minutes1) < 10 ? `0${minutes1}` : minutes1,
    newSeconds = parseInt(seconds1) < 10 ? `0${seconds1}` : seconds1,
    time1 = `${newHours}:${newMinutes.substring(1)}`,
    time = hours > 12 ? `${time1} PM` : `${time1} AM`,
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

  return {
    time,
    fulltime,
    day,
    fulldate,
    monthDay,
    hours,
    minutes,
    seconds,
    minuteSec,
  };
};
