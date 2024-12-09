
import React,{useState} from 'react'
import { toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import backgroundImage from '../assets/sunset.jpg';
const Weather = ({data}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
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
  onClick={handleClick}
  gridColumn="span 4"
  gridRow="span 2"
  sx={{
    backgroundImage: `url(${backgroundImage})`, // Replace 'your-image-url.jpg' with the actual image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '30px',
    position: 'relative', // Enable positioning of inner elements
  }}
>
  {/* Top Left Section */}
  <Box sx={{ position: 'absolute', top: '10px', left: '10px' }}>
    <Typography variant="h5" fontWeight="600">
      Pokhara
    </Typography>

    <Typography variant="h5">12°F</Typography>
  </Box>

  {/* Top Right Section */}
  <Box sx={{ position: 'absolute', top: '10px', right: '10px' }}>
    <Typography variant="h5" fontWeight="600">
      Cloudy
    </Typography>
    <Typography variant="body">
      {new Date().toLocaleTimeString()} {/* Displays current time */}
    </Typography>
  </Box>
</Box>
    </>
  )
}

export default Weather