import { unixToTimeStamp } from "./math/unixToTime";

export const calculateSunMoon = (obj: any) => {
  const sunrise = unixToTimeStamp(obj.sunrise).time,
    sunset = unixToTimeStamp(obj.sunset).time,
    moonrise = unixToTimeStamp(obj.moonrise).time,
    moonset = unixToTimeStamp(obj.moonset).time;

  return { sunrise, sunset, moonrise, moonset };
};

export const calculateSunMoonDiff = (obj1: any, obj2: any) => {
  const getMinSec = (val: number) => {
    return unixToTimeStamp(val).minuteSec;
  };
  const srDate1 = getMinSec(obj1.sunrise),
    srDate2 = getMinSec(obj2.sunrise),
    ssDate1 = getMinSec(obj1.sunset),
    ssDate2 = getMinSec(obj2.sunset),
    mrDate1 = getMinSec(obj1.moonrise),
    mrDate2 = getMinSec(obj2.moonrise),
    msDate1 = getMinSec(obj1.moonset),
    msDate2 = getMinSec(obj2.moonset);

  const calcMinSecDiff = (date1: any, date2: any) => {
    const min1 = date1.substring(0, 2);
    const min2 = date2.substring(0, 2);
    const sec1 = date1.substring(3, 5);
    const sec2 = date2.substring(3, 5);

    if (min1 === min2) {
      return sec2 - sec1 > 0 ? `0m ${sec2 - sec1}s` : `-0m ${sec1 - sec2}s`;
    } else if (min2 > min1) {
      return sec2 - sec1 > 0
        ? `${min2 - min1}m ${sec2 - sec1}s`
        : `${min2 - min1 - 1}m ${sec1 - sec2}s`;
    } else if (min1 > min2) {
      return sec2 - sec1 > 0
        ? `${min1 - min2}m ${sec2 - sec1}s`
        : `${min1 - min2 - 1}m ${sec1 - sec2}s`;
    }
  };

  const sunrise = calcMinSecDiff(srDate1, srDate2),
    sunset = calcMinSecDiff(ssDate1, ssDate2),
    moonrise = calcMinSecDiff(mrDate1, mrDate2),
    moonset = calcMinSecDiff(msDate1, msDate2);

  return { sunrise, sunset, moonrise, moonset };
};
