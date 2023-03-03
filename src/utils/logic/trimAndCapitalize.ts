export const trimAndCapitalize = (val: string) => {
  // const newStr = val.replace(/\s/g, "");
  const newStr = val.trim();

  return newStr.charAt(0).toUpperCase() + newStr.slice(1);
};
