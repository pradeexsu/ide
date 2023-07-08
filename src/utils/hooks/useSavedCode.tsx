import { useEffect, useState } from "react";
import { getCode } from "../../services/saveCode";

type Props = {
  codeId: string | undefined;
};
export enum FetchStatus {
  Fetching,
  Success,
  Failed,
  None,
}
export const useSavedCode = ({ codeId }: Props) => {
  const [fetchStatus, setFetchStatus] = useState<FetchStatus>(FetchStatus.None);
  const [lang, setLang] = useState<string | undefined>();
  const [code, setCode] = useState<string | undefined>();

  useEffect(() => {
    async function fetchData(): Promise<void> {
      try {
        if (codeId === undefined || isNaN(Number(codeId))) {
          setFetchStatus(FetchStatus.None);
          return;
        }
        setFetchStatus(FetchStatus.Fetching);
        const res = await getCode(Number(codeId));
        const { code, lang, message } = res;
        if (message) console.log(message);
        setLang(lang);
        setCode(code);
        setFetchStatus(FetchStatus.Success);
      } catch (error) {
        setFetchStatus(FetchStatus.Failed);
      }
    }
    void fetchData();
  }, [codeId]);

  return {
    fetchStatus,
    lang,
    code,
  };
};
