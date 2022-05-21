const gradient =
  "linear-gradient(135deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%))";

export default {
  dark: {
    backgrounds: {
      page: "hsl(235, 21%, 11%)", // very dark blue
      todo: "hsl(235, 24%, 19%)", // very dark desat blue
      checkbox: gradient,
    },
    text: {
      filter: {
        default: "hsl(234, 11%, 52%)", // dark grayish blue
        active: "hsl(220, 98%, 61%)", // bright blue
        hover: "hsl(236, 33%, 92%)", // light grayish blue (hover)
      },
      secondary: {
        default: "hsl(233, 14%, 35%)", // very dark grayish blue
        hover: "hsl(236, 33%, 92%)", // light grayish blue (hover)
      },
      todo: {
        default: "hsl(234, 39%, 85%)", // light grayish blue
        completed: "hsl(233, 14%, 35%)", // very dark grayish blue - 1
      },
    },
    borders: {
      todo: "hsl(237, 14%, 26%)", // very dark grayish blue - 2
      checkbox: gradient,
    },
  },
  light: {
    backgrounds: {
      page: "hsl(0, 0%, 98%)", // very light gray
      todo: "hsl(0, 0%, 100%)", // white
      checkbox: gradient,
    },
    text: {
      filter: {
        default: "hsl(236, 9%, 61%)", // dark grayish blue
        active: "hsl(220, 98%, 61%)", // bright blue
        hover: "hsl(235, 19%, 35%)", // very dark grayish blue
      },
      secondary: {
        default: "hsl(233, 11%, 84%)", // light grayish blue
        hover: "hsl(236, 9%, 61%)", // dark grayish blue
      },
      todo: {
        default: "hsl(235, 19%, 35%)", // very dark grayish blue
        completed: "hsl(233, 11%, 84%)", // light grayish blue
      },
    },
    borders: {
      todo: "hsl(233, 11%, 84%)", // light grayish blue
      checkbox: gradient,
    },
  },
};
