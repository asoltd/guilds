import { ThemeOptions } from "@mui/material/styles"

const typography: ThemeOptions["typography"] = {
  fontFamily: "Plus Jakarta Sans, sans-serif",
  h1: {
    fontSize: "3.5rem",
    fontWeight: 600,
    lineHeight: "72px",
    letterSpacing: "-0.02em",
    textAlign: "left",
  },
  h3: {
    fontWeight: 700,
    fontSize: "2.5rem",
    lineHeight: 1.167,
    letterSpacing: "-0.01562em",
    marginBottom: "1rem",
  },
  h5: {
    fontWeight: 500,
    fontSize: "1.25rem",
    lineHeight: 1.6,
    letterSpacing: "0.0075em",
    marginBottom: "1rem",
    color: "#667085",
  },
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
