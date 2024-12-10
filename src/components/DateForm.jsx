import React, { useState } from "react";
import { Box, TextField, Button, useTheme,useMediaQuery } from "@mui/material";
import { toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { tokens } from "../theme";
const DateForm = ({ onSumbitArg }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const today = new Date().toISOString().split("T")[0]; 

    // Validation: Check if dates are not greater than today
    if (startDate > today || endDate > today) {
      toast.warn("Start date and End date cannot be greater than today's date.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });
      return;
    }

    // Validation: Check if end date is greater than start date
    if (endDate <= startDate) {
      toast.warn("Start date cannot be greater than end date.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });
      return;
    }
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
            borderRadius: "4px", 
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
      }} 
    >
      Fetch Data
    </Button>
  </form>
  );
};

export default DateForm;
