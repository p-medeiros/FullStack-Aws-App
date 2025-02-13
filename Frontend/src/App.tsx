import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import AppTheme from "./theme/AppTheme";
import SideMenu from "./components/SideMenu";
import AppNavbar from "./components/AppNavbar";
import { Box, CssBaseline } from "@mui/material";
import Header from "./components/Header";
import { AppProvider } from "./AppContext";

export default function App() {
  return (
    <BrowserRouter>
      <AppTheme>
        <AppProvider>
          <Box sx={{ display: "flex" }}>
            <SideMenu />
            <CssBaseline enableColorScheme />
            <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
              <Header />
              <AppNavbar />
              <AppRoutes />
            </Box>
          </Box>
        </AppProvider>
      </AppTheme>
    </BrowserRouter>
  );
}