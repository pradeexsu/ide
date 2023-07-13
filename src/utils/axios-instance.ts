import Axios, { AxiosError, AxiosResponse } from "axios";

const axiosInstance = Axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

const successHandler = (response: AxiosResponse) => {
  return response;
};

const errorHandler = async (error: AxiosError): Promise<AxiosError> => {
  console.log(`error_status=${error.message} `);
  return Promise.reject(error);
};

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => successHandler(response),
  (error: AxiosError) => errorHandler(error)
);

export { axiosInstance };

// import {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";

// const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
//     console.info(`[request] [${JSON.stringify(config)}]`);
//     return config;
// }

// const onRequestError = (error: AxiosError): Promise<AxiosError> => {
//     console.error(`[request error] [${JSON.stringify(error)}]`);
//     return Promise.reject(error);
// }

// const onResponse = (response: AxiosResponse): AxiosResponse => {
//     console.info(`[response] [${JSON.stringify(response)}]`);
//     return response;
// }

// const onResponseError = (error: AxiosError): Promise<AxiosError> => {
//   console.error(`[response error] [${JSON.stringify(error)}]`);
//   return Promise.reject(error);
// };

// export function setupInterceptorsTo(axiosInstance: AxiosInstance): AxiosInstance {
//     axiosInstance.interceptors.request.use(onRequest, onRequestError);
//     axiosInstance.interceptors.response.use(onResponse, onResponseError);
//     return axiosInstance;
// }
