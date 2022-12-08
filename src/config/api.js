import axios from "axios";
const memoAPI = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: process.env.REACT_APP_AXIOS_BASE_URL || "http://localhost:5000",
});

export default memoAPI;
