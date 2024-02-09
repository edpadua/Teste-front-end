import axios from "axios";


const apiDates = axios.create({
    baseURL: "http://localhost:3000/api/scheduling/date"
})

export default apiDates