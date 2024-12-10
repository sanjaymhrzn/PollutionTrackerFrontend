import Dashboard from "./pages/Dashboard";
// import { useState } from "react";

import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Layout from "./components/Layout/Layout";

function App() {
  const [theme, colorMode] = useMode();
  // const [isSidebar, setIsSidebar] = useState(true);

  return (
  <ColorModeContext.Provider value={colorMode}>
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Layout>
      <Dashboard />
    </Layout>
  </ThemeProvider>
</ColorModeContext.Provider>
  );
}

export default App;
