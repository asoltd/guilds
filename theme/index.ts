import { ThemeOptions } from "@mui/material/styles"

const typography: ThemeOptions["typography"] = {
  fontFamily: "Plus Jakarta Sans, sans-serif",
}

export const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#41764A",
      light: "#D8E9DA",
    },
    secondary: {
      main: "#101828",
      light: "#1D2939",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F9FAFB",
    },
    text: {
      primary: "#101828",
      secondary: "#667085",
    },
  },
  typography,
}

export const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#41764A",
      light: "#D8E9DA",
    },
    secondary: {
      main: "#FFFFFF",
      light: "#EAECF0",
    },
    background: {
      default: "#101828",
      paper: "#1D2939",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#EAECF0",
    },
  },
  typography,
}
