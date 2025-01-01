import axios from "axios";

const request = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// adding middleware request
request.interceptors.request.use(
  (config) => {
    console.log("Request Interceptor:", config);

    config.headers["Authorization"] = "Bearer your-token";

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
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
  }
);

export default request;
