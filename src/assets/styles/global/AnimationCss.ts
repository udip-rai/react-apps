export const removeBlur = {
  webkitBackfaceVisibility: "hidden",
  webkitTransform: "translateZ(0) scale(1, 1)",
};

export const scrollbarOne = {
  // scrollbarGutter: "stable both-edges",

  "::-webkit-scrollbar": {
    width: "8px",
    height: "8px",
  },

  "::-webkit-scrollbar-track": {
    width: "13px",
    height: "13px",
  },

  "::-webkit-scrollbar-thumb": {
    backgroundImage: "linear-gradient(180deg, #d0368a 0%, #708ad4 99%)",
    boxShadow: "inset 2px 2px 5px 0 rgba(#fff, 0.5)",
    borderRadius: "100px",
  },
};
