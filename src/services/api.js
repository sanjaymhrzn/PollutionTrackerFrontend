import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/combined_data/";

export const fetchData = async (startDate,endDate) => {
    try {
        const response = await axios.post(BASE_URL , {
            start_date: startDate,
            end_date: endDate,
            headers: {
                'Content-Type': 'application/json', // Ensure the backend expects this
            }});
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
};
