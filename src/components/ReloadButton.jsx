import React from 'react'
import { Box, Button, useTheme } from "@mui/material";
import RefreshIcon from '@mui/icons-material/Refresh';
import { tokens } from "../theme";

const ReloadButton = () => {
  
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const handleReload = () => {
        // Reload the app
        window.location.reload();
      };
    
  return (
    <div>
      
      <Box>
          <Button
          onClick={handleReload}
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "24px",
              fontWeight: "bold",
              padding: "px",
            }}
          >
            <RefreshIcon sx={{ mr: "10px" }} />
          </Button>
        </Box>
    </div>
  )
}

export default ReloadButton