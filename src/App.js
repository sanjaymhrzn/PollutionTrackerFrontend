import Dashboard from "./pages/Dashboard";
import { useState } from "react";
// import { Routes, Route } from "react-router-dom";

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Layout from "./components/Layout/Layout";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
  //   <ColorModeContext.Provider value={colorMode}>
  //   <ThemeProvider theme={theme}>
  //     <CssBaseline />
  //     <div className="app">
  //       <Sidebar isSidebar={isSidebar} />
  //       <main className="content" >
  //   <ToastContainer
  //     position="top-center"
  //     autoClose={5000}
  //     hideProgressBar={false}
  //     newestOnTop={false}
  //     closeOnClick
  //     rtl={false}
  //     pauseOnFocusLoss
  //     draggable
  //     pauseOnHover
  //     theme="light"
  //     />
  //         <Topbar setIsSidebar={setIsSidebar} />
  //       <Dashboard />
  //       </main> 
  //     </div>
  //   </ThemeProvider>
  // </ColorModeContext.Provider>
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
