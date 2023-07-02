import { axiosInstance } from "../utils/axios-instance";

export const saveCode = async (lang, code) => {
  try {
    const requestBody = {
      code,
      lang,
    };
    const { data } = await axiosInstance.post(`save`, requestBody);
    return data?.data;
  } catch (e) {
    console.error(e);
  }
};
export const getCode = async (codeId) => {
  try {
    const { data } = await axiosInstance.get(`save/${codeId}`);
    console.log(data);
    return data;
  } catch (e) {
    console.error(e);
  }
};
