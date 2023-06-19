import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App/app";
import { Box, createTheme } from "@mui/material";
import { ThemeProvider } from "styled-components";
const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(93 93 255 )'
    },
    secondary: {
      main: 'rgb(93 93 255 )'
    },
}})
;

root.render(
  <ThemeProvider theme={theme}>
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        background: "#151719",
        color: "white",
      }}
    >
      <Box sx={{ width: { lg: "1200px", xs: "100%" } }}>
        <App />
      </Box>
    </Box>
  </ThemeProvider>
);
