import Axios from "axios";

// const baseURL = process.env.REACT_APP_API_URL;
const baseURL = "http://localhost:3000/";

const axiosInstance = Axios.create({
  baseURL: baseURL,
});

const successHandler = (response) => {
  return response;
};

const errorHandler = async (error) => {
  console.log(`error_status=${error?.response?.status}`);
  return Promise.reject(error);
};

axiosInstance.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
);

export { axiosInstance };
