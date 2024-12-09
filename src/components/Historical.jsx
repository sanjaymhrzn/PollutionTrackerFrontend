import React from "react";
import { Line } from "react-chartjs-2";
import { Box,useTheme } from "@mui/material";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { tokens } from "../theme";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Historical = ({ data }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    if (!data || data.length === 0) return null;
    console.log(data)
    const labels = data.map((item) => item.date);
    const airQualityIndex = data.map((item) => item.air_quality_index);
    const waterQualityIndex = data.map((item)=> item.water_quality_index);
    const chartData = {
        labels,
        datasets: [
            {
                label: "Air Quality Index",
                data: airQualityIndex,
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                fill: true,
                tension: 0.4,
            },
            {
                label: "Water Quality Index",
                data: waterQualityIndex,
                borderColor: "rgba(255, 99, 132, 1)",
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                fill: true,
                tension: 0.4,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
            labels: {
              color: colors.grey[100], // Legend label color
            },
          },
          title: {
            display: true,
            text: "Historical Quality Index",
            color: colors.grey[100], // Title color
          },
        },
        scales: {
          x: {
            ticks: {
              color: colors.grey[100],
              display:true // X-axis label color
            },
            title: {
              display: false,
              color: colors.grey[100], // X-axis measurement color
            },
          },
          y: {
            ticks: {
              color: colors.grey[100],
              display:true, 
            },
            grid: {
              color: colors.grey[700], // Y-axis grid line color
              drawBorder: true, // Draw border for Y-axis
            },
            title: {
              display: false,
              color: colors.grey[100], // Y-axis measurement color
            },
          },
        },
      };
      

    return (
    <>
        <Box
        //   gridColumn="span 8"
        //   gridRow="span 2"
        //   backgroundColor={colors.primary[400]}
        sx={{
            gridColumn: { xs: "span 12", sm: "span 12", md: "span 8" },
            gridRow: { xs: "span 2", sm: "span 2", md: "span 2" },
            backgroundColor: colors.primary[400],
          }}
        >
          <Box height="100%" width="100%" m="-1 0 0 0">
          <Line data={chartData} options={options} />
          </Box>
        </Box>
    </>

    );
};

export default Historical;