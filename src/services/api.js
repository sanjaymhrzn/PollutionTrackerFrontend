import axios from "axios";
import { toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//http://127.0.0.1:8000 https://sanjaymhrzn.pythonanywhere.com
const BASE_URL = "https://sanjaymhrzn.pythonanywhere.com/api/combined_data/";

export const fetchData = async (startDate,endDate) => {
    try {
        const response = await axios.post(BASE_URL , {
            start_date: startDate,
            end_date: endDate,
            headers: {
                'Content-Type': 'application/json', 
            }});
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
       
        toast('Server Starting up! Please try again in few seconds', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        })
        return null;
    }
};
