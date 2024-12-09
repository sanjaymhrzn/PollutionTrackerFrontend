import React,{useEffect} from 'react';
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import ScienceIcon from '@mui/icons-material/Science';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { tokens } from "../theme";
import Header from "./Header";
import StatBox from "./StatBox";
import AirIcon from '@mui/icons-material/Air';
import WaterDropIcon from '@mui/icons-material/WaterDrop';

import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

const LiveData = ({data}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

    useEffect(() => {
        if (data.water_quality_index > 50) {
            toast('Warning! The fish in Phewa Lake are starting to complain 🐟.', {
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
        }
    }, [data]); 
  return (
    <>
            <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            >
            <StatBox
                title={data.air_quality_index}
                subtitle="Air Quality"
                progress="0.75"
                increase="+14%"
                icon={
                <AirIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
                }
            />
            </Box>
            <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            >
            <StatBox
                title={data.water_quality_index}
                subtitle="Water Quality"
                progress="0.50"
                increase="+21%"
                icon={
                <WaterDropIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
                }
            />
            </Box>
            <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            >
            <StatBox
                title={data.ph_level}
                subtitle="PH Value"
                progress="0.30"
                increase="+5%"
                icon={
                <ScienceIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
                }
            />
            </Box>
            <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            >
            <StatBox
                title="22.55"
                subtitle="Noise Level"
                progress="0.80"
                increase="+43%"
                icon={
                <VolumeUpIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
                }
            />
            </Box>
  
    </>
  )
}

export default LiveData