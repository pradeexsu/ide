import { axiosInstance } from "../utils/axios-instance";
import { CodeResponse, CodeSaveRequest, CodeSaveResponse } from "./typings";

export const saveCode = async (
  requestBody: CodeSaveRequest
): Promise<CodeSaveResponse> => {
  const res = await axiosInstance.post(`v1/api/save`, requestBody);
  return res.data as CodeSaveResponse;
};

export const getCode = async (codeId: number): Promise<CodeResponse> => {
  const res = await axiosInstance.get(`v1/api/save/${codeId}`);
  return res.data as CodeResponse;
};
