import React, { useEffect,useState } from 'react'
import Historical from '../components/Historical'
import DateForm from '../components/DateForm';
import {fetchData} from '../services/api'
import Weather from '../components/Weather';
import ReloadButton from '../components/ReloadButton';
import { BeatLoader  } from "react-spinners";
import LiveData from '../components/LiveData';
import { Box,useMediaQuery, useTheme } from "@mui/material";
import Header from "../components/Header";
import WeatherStatus from '../components/WeatherStatus';
import HistoricalPH from '../components/HistoricalPH';
const Dashboard = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const [loading,setLoading] = useState(true);
    const [historicalData,setHistoricalData] = useState([]);
    const [weatherData,setWeatherData]=useState({})
    const [liveData,setLiveData]=useState({})

    const defaultStartDate = "2023-01-01";
    const defaultEndDate = "2024-12-01";

    useEffect(() => {

        // Fetch default data on initial load
        const fetchDefaultData = async () => {
          try {
            const response = await fetchData(defaultStartDate, defaultEndDate);
            setHistoricalData(response.historical_data);
            setWeatherData(response.weather_data);
            setLiveData(response.live_sensor_data);
          // console.log("livedata",liveData);

          } catch (error) {
            console.error("Failed to fetch default data:", error);
          } finally {
            setLoading(false);


          }
        };
        fetchDefaultData();
      }, []);


     const handleSubmit= async(startDate,endDate)=>{
        setLoading(true);
        setHistoricalData([]);
        try{
            const response = await fetchData(startDate,endDate);
            setHistoricalData(response.historical_data);
            setWeatherData(response.weather_data);
            setLiveData(response.live_sensor_data);


        }catch(error){
            console.error("Failed to fetch data:", error);
        }finally {
            setLoading(false)
        }
    }
  return (
    <div>
        {loading &&(
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            textAlign: "center",

          }}
        >

          <BeatLoader  color="rgba(75, 192, 192, 1)" size={20} />
          {/* <p style={{ justifyContent: "center", marginTop: "20px", marginLeft: "50px" ,fontSize: "28px", color: "rgba(75, 192, 192, 1)" }}>
            LOADING .....
          </p> */}
        </div>
      )}
        {!loading && (
            <>
      <Box m="20px">
          {/* HEADER */}
          <Box
      display="flex"
      flexDirection={isSmallScreen ? "column" : "row"} // Stack elements in column on small screens
      justifyContent="space-between"
      alignItems={isSmallScreen ? "flex-start" : "center"} // Align items to the left on small screens
      gap={isSmallScreen ? "10px" : "0"} // Add space between items on small screens
    >
            <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
            <DateForm onSumbitArg={handleSubmit}/>
            <ReloadButton/>
            </Box>
          {/* GRID & CHARTS */}
          {/* ROW1 */}
          <Box
      display={isSmallScreen ? "flex" : "grid"} // Switch between grid and flex
      gridTemplateColumns={isSmallScreen ? "none" : "repeat(12, 1fr)"} // Apply grid template only for larger screens
      gridAutoRows="140px"
      gap="20px"
      flexDirection={isSmallScreen ? "column" : "initial"} // Change to column on small screens
    >
          <LiveData data={liveData}/>
      {/* ROW 2*/}
      <Historical data={historicalData}/>
      <Weather data={weatherData}/> 
      <HistoricalPH data={historicalData}/>
      <WeatherStatus data={weatherData}/>
      </Box>
    </Box>

            </>
        )}
    </div>
  )
}

export default Dashboard