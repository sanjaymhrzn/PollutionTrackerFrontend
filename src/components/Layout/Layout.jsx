import React, { useState } from "react";
import { Box} from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Topbar from "../Topbar";
import { SidebarComponent } from "../Sidebar";

const Layout = ({ isSidebar, setIsSidebar, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  console.log("is sidebar", isCollapsed);
  return (
    <Box display="flex" height="100vh" overflow="hidden">
      <Box
        width={isCollapsed ? "80px" : "250px"}
        position="fixed"
        height="100%"
        sx={{
          overflow: "auto", // Allow scrolling
          paddingRight: "10px", // Optional: prevent content cut-off
          scrollbarWidth: "none", // For Firefox
          msOverflowStyle: "none", // For Internet Explorer and Edge
          "&::-webkit-scrollbar": {
            display: "none", // Hide scrollbar in Webkit-based browsers
          },
        }}
        
      >
        <SidebarComponent
          isSidebar={isSidebar}
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}

        />
      </Box>
      <Box
        marginLeft={isCollapsed ? "80px" : "250px"}
        width={isCollapsed ? "calc(100%-100px)" : "calc(100% - 250px)"}
        position="relative"
      >
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Box position="absolute" top={0} right={0} width="100%" zIndex={1000}>
          <Topbar setIsSidebar={setIsSidebar} />
        </Box>
        <Box
          marginTop="64px"
          padding="20px"
          height="calc(100vh - 64px)"
          overflow="auto"
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
