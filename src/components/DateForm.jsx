import React, { useState } from "react";
import { Box, TextField, Button, useTheme,useMediaQuery } from "@mui/material";
import { tokens } from "../theme";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday"; 
const DateForm = ({ onSumbitArg }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Adjust the breakpoint as needed
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log()
    if (startDate && endDate) {
      onSumbitArg(startDate, endDate);
    } else {
      alert("Please select both start and end dates.");
    }
  };

  return (
    <form
    onSubmit={handleSubmit}
    style={{
      display: "flex",
      flexDirection: isSmallScreen ? "column" : "row", // Stack fields vertically on small screens
      alignItems: "center",
      gap: isSmallScreen ? "12px" : "16px", // Adjust the gap for smaller screens
    }}
  >
    <Box>
      <TextField
       backgroundColor={colors.primary[400]}
        label="Start Date"
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        required
        sx={{
          "& .MuiOutlinedInput-root": {
            backgroundColor: colors.primary[400], // Input field background
            borderRadius: "4px", // Optional: Rounded corners
            "& fieldset": {
              borderColor: colors.primary[100], // Default border color
            },
            "&:hover fieldset": {
              borderColor: colors.primary[100], // Hover border color
            },
            "&.Mui-focused fieldset": {
              borderColor: colors.primary[100], // Focused border color
            },
          },
          "& .MuiInputLabel-root": {
            color: colors.primary[100], // Label color for non-focused state
          },
          "& .Mui-focused .MuiInputLabel-root": {
            color: colors.primary[100], // Focused label color
          },
          "& .MuiSvgIcon-root": {
            color: colors.primary[100], // Default icon color
            "&:hover": {
              color: colors.primary[100], // Icon hover color
            },
          },
      
        }}
        InputLabelProps={{
          shrink: true,
          style: { color: colors.grey[100] },
        }}
      />
    </Box>
    <Box>
      <TextField
       backgroundColor={colors.primary[400]}
        label="End Date"
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        required
  sx={{
    "& .MuiOutlinedInput-root": {
      backgroundColor: colors.primary[400], // Input field background
      borderRadius: "4px", // Optional: Rounded corners
      "& fieldset": {
        borderColor: colors.primary[100], // Default border color
      },
      "&:hover fieldset": {
        borderColor: colors.primary[100], // Hover border color
      },
      "&.Mui-focused fieldset": {
        borderColor: colors.primary[100], // Focused border color
      },
    },
    "& .MuiInputLabel-root": {
      color: colors.primary[100], // Label color for non-focused state
    },
    "& .Mui-focused .MuiInputLabel-root": {
      color: colors.primary[100], // Focused label color
    },
    "& .MuiSvgIcon-root": {
      color: colors.grey[100], // Default icon color
      "&:hover": {
        color: colors.greenAccent[500], // Icon hover color
      },
    },
  }}
        InputLabelProps={{
          shrink: true,
          style: { color: colors.grey[100] },
        }}
      />
        {/* <DatePicker
        backgroundColor={colors.primary[400]}
          label="End Date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          required
        /> */}
    </Box>
    <Button
      type="submit"
      variant="contained"
      sx={{
        backgroundColor: colors.blueAccent[700],
        color: colors.grey[100],
        fontSize: "14px",
        fontWeight: "bold",
        padding: "10px 20px",
      }} // Matches the height of the TextFields
    >
      Fetch Data
    </Button>
  </form>
  );
};

export default DateForm;
