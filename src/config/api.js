import axios from "axios";

const memoAPI = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_BASE_URL || "http://localhost:5000",
});

export default memoAPI;
