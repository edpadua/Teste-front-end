import axios from "axios";


const apiTimes = axios.create({
    baseURL: "http://localhost:3000/api/scheduling/time"
})

export default apiTimes