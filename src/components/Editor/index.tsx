import { EditorView } from "codemirror";
import { useEffect, useRef } from "react";
import "./style.css";
import { useEditorStore } from "../../store/store";
import { useParams } from "react-router-dom";
import { FetchStatus, useSavedCode } from "../../utils/hooks/useSavedCode";
import { textToLanguage } from "../../utils/mapper";
import {
  extensions,
  getLanguageExtention,
  getThemeExtention,
} from "./extensions";
import { useNavigate } from "react-router-dom";

export const Editor = () => {
  const editorRef = useRef<HTMLElement>(null);
  const { codeId } = useParams();
  const {
    fetchStatus,
    code: fetchedCode,
    lang: fetchedLang,
  } = useSavedCode({ codeId });
  const navigate = useNavigate();

  const {
    language,
    setView,
    setLanguage,
    setCode,
    code,
    theme,
    setErrorNotification,
    setSuccessNotification,
  } = useEditorStore();

  useEffect(() => {
    if (editorRef.current === null) return;

    const view1 = new EditorView({
      parent: editorRef.current,
      doc: code,
      extensions: [
        ...extensions,
        getThemeExtention(theme),
        getLanguageExtention(language),
      ],
    });
    setView(view1);
    return () => {
      view1.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editorRef.current, code, language, theme]);

  useEffect(() => {
    if (codeId === undefined) return;
    if (fetchStatus === FetchStatus.Success && fetchedCode && fetchedLang) {
      setCode(fetchedCode);
      setLanguage(textToLanguage(fetchedLang));
      setSuccessNotification("Code Loadded Successfully! 🤩");
    } else if (fetchStatus === FetchStatus.Failed) {
      setErrorNotification("Failed to fetch Code from Server 😶‍🌫️");
      navigate('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchStatus]);

  return <section ref={editorRef} />;
};
