import { axiosInstance } from "../utils/axios-instance";

export const execute = async (lang, code, input) => {
  try {
    const requestBody = {
      code,
      lang,
      input,
    };
    const { data } = await axiosInstance.put(`execute`, requestBody);
    return data;
  } catch (e) {
    console.error(e);
  }
};
