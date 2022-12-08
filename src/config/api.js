import axios from "axios";
console.log(`**** ${process.env.REACT_APP_AXIOS_BASE_URL}`);
const memoAPI = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: process.env.REACT_APP_AXIOS_BASE_URL || "http://localhost:5000",
});

export default memoAPI;
