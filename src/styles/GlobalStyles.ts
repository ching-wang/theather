import { createGlobalStyle } from "styled-components";


export const theme = {
 palette: {
  default: "#000000",
  black: "#000000",
  white: "#ffffff",
  grey: "#E5E5E5",
  purple: "#7F00FF",

 },

 shadow: "0 4px 8px 0 rgba(0,0,0,0.2)",

};

const GlobalStyles = createGlobalStyle( props => {
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
   }

  },

  html: {
   ...windowSizes,
   fontSize: "62.5%",
  },

  body: {
   ...windowSizes,
  },

  "#root": {
   ...windowSizes,

   "& > *": {
    backgroundColor: theme.palette.white,
   },
  }

 }
});

export default GlobalStyles;