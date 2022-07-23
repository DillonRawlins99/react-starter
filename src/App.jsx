import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes";
import Navbar from "./common/Navbar/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function App() {
  const routeEls = routes.map(([path, ele, _], idx) => (
    <Route key={idx} path={path} element={ele} />
  ));

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>{routeEls}</Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}
