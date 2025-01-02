import axios from "axios";
import store from "./store/store.js";

const request = axios.create({
  baseURL: "http://localhost:8000/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// adding middleware request
request.interceptors.request.use(
  (config) => {
    console.log("Request Interceptor:", config);

    const yearOfService = store.getState().filters.yearOfService;
    config.headers["year_of_service"] = yearOfService;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// adding middleware to response
request.interceptors.response.use(
  (response) => {
    console.log("Response Interceptor:", response);

    return response;
  },
  (error) => {
    console.log("Response error:", error);
    return Promise.reject(error);
  },
);

export default request;
