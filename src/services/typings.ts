type CodeSaveRequest = {
  code: string;
  lang: string;
};

type CodeSaveResponse = {
  id: number;
  message: string;
};

type CodeResponse = {
  code: string;
  lang: string;
  message: string;
};
