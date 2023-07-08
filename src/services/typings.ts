export type CodeSaveRequest = {
  code?: string;
  lang: string;
};

export type CodeSaveResponse = {
  id: number;
  message: string;
};

export type CodeResponse = {
  code: string;
  lang: string;
  message: string;
};

export type ExecuteRequest = {
  lang: string;
  code: string;
  input: string;
};

export type ExecuteResponse = {
  message: string;
  output?: string;
};
