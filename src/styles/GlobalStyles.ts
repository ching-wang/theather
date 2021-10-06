import { createGlobalStyle } from "styled-components";

export const theme = {
  palette: {
    default: "#000000",
    black: "rgb(20, 20, 20)",
    white: "#ffffff",
    grey: "#E5E5E5",
    red: "#e50914",
    bgColor: "rgba(0, 0, 0, 0.9)"
  },

  shadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
};

const GlobalStyles = createGlobalStyle(() => {
  const windowSizes = {
    width: "100%",
    height: "100%",
  };

  return {
    "*": {
      boxSizing: "border-box",
      margin: "0",
      padding: "0",

      "&:focus": {
        outline: "none",
      },
    },

    html: {
      ...windowSizes,
      fontSize: "62.5%",
    },

    body: {
      ...windowSizes,

      a: {
        color: theme.palette.black,
        textDecoration: "none"
      },
    },

    "#root": {
      ...windowSizes,

      "& > *": {
        backgroundColor: theme.palette.white,
      },
    },
  };
});

export default GlobalStyles;
