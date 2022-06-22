import axios from "axios";

const memoAPI = axios.create({
  baseURL: "http://localhost:5000",
});

export default memoAPI;
