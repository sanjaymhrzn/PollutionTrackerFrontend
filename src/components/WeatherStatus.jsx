
import React,{useState} from 'react'
import { toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const WeatherStatus = ({data}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
    console.log(data.main.temp)
    const [clickCount, setClickCount] = useState(0);

    const handleClick = () => {
        setClickCount((prevCount) => {
          const newCount = clickCount + 1;
          if (newCount === 3) {

            toast('We recommend boating with an umbrella today ☂️', {
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
            return 0;
          }
          return newCount;
        });
    }

  return (
    <>
<Box
  gridColumn="span 4"
  gridRow="span 2"
  backgroundColor={colors.primary[400]}
  overflow="hidden"
  onClick={handleClick}
  display="flex"
  flexWrap="wrap"
  gap="20px"
  justifyContent="space-between"
  padding="20px"
>
  {/* Box 1: Feels Like */}
  <Box
    backgroundColor={colors.greenAccent[500]}
    borderRadius="8px"
    p="20px"
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    flex="1 1 45%" // Flexbox to make it responsive
  >
    <Typography color={colors.grey[100]} variant="h6" fontWeight="600">
      Feels Like
    </Typography>
    <Typography color={colors.grey[100]} variant="h4" fontWeight="bold">
      {data.main ? `${data.main.feels_like.toFixed()}°F` : "--"}
    </Typography>
  </Box>

  {/* Box 2: Humidity */}
  <Box
    backgroundColor={colors.greenAccent[500]}
    borderRadius="8px"
    p="20px"
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    flex="1 1 45%" // Flexbox to make it responsive
  >
    <Typography color={colors.grey[100]} variant="h6" fontWeight="600">
      Humidity
    </Typography>
    <Typography color={colors.grey[100]} variant="h4" fontWeight="bold">
      {data.main ? `${data.main.humidity}%` : "--"}
    </Typography>
  </Box>

  {/* Box 3: Wind */}
  <Box
    backgroundColor={colors.greenAccent[500]}
    borderRadius="8px"
    p="20px"
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    flex="1 1 45%" // Flexbox to make it responsive
  >
    <Typography color={colors.grey[100]} variant="h6" fontWeight="600">
      Wind
    </Typography>
    <Typography color={colors.grey[100]} variant="h4" fontWeight="bold">
      {data.wind ? `${data.wind.speed.toFixed()} mph` : "--"}
    </Typography>
  </Box>

  {/* Box 4: Sunrise */}
  <Box
    backgroundColor={colors.greenAccent[500]}
    borderRadius="8px"
    p="20px"
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    flex="1 1 45%" // Flexbox to make it responsive
  >
    <Typography color={colors.grey[100]} variant="h6" fontWeight="600">
      Pressure
    </Typography>
    <Typography color={colors.grey[100]} variant="h4" fontWeight="bold">
    {data.wind ? `${data.main.pressure} Pa` : "--"}
    </Typography>
  </Box>
</Box>

    </>
  )
}

export default WeatherStatus