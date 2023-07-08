import { axiosInstance } from "../utils/axios-instance";
import { ExecuteRequest, ExecuteResponse } from "./typings";

export const execute = async ({
  lang,
  code,
  input,
}: ExecuteRequest): Promise<ExecuteResponse | undefined> => {
  try {
    const requestBody = {
      code,
      lang,
      input,
    };
    const res = await axiosInstance.put(`execute`, requestBody);
    return res.data as ExecuteResponse;
  } catch (e) {
    console.error(e);
  }
};
