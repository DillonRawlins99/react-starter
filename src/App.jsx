import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Layout } from "./Layout/Layout";

const theme = createTheme();

// Concerns of App:
// - Wire up client-side routing
// - Providers for various state providers (theming, context, etc.)
export default function App() {
  const routeEls = routes.map(([path, ele, _], idx) => (
    <Route key={idx} path={path} element={ele} />
  ));

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Layout>
          <Routes>{routeEls}</Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}
