export const pickMonster = (color: string) => {
  const newColor = color.split(".")[0];
  return newColor === "green"
    ? "monster1.png"
    : newColor === "yellow"
    ? "monster2.png"
    : newColor === "monster3.png"
    ? "orange.png"
    : newColor === "red"
    ? "monster4.png"
    : "monster1.png";
};
