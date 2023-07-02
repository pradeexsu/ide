import { nord } from "cm6-theme-nord";
import { EditorView, basicSetup } from "codemirror";
import { useEffect, useRef } from "react";
import "./style.css";
import { useStore } from "../../store/store";
import { languages } from "./extensions";
import { useParams } from "react-router-dom";
import { getCode } from "../../services/saveCode";

export const Editor = () => {
  const editorRef = useRef();
  const { codeId } = useParams();

  const { language, setView, setLanguage, setCode, code } = useStore();

  useEffect(() => {
    if (editorRef.current === null) return;

    const view1 = new EditorView({
      parent: editorRef.current,
      doc: code,
      extensions: [
        basicSetup,
        nord,
        languages[language],
        EditorView.editable.of(true),
      ],
    });
    setView(view1);
    return () => {
      view1.destroy();
    };
  }, [editorRef.current, code, language]);

  useEffect(() => {
    async function fetchData() {
      const res = await getCode(codeId);
      const { code, lang } = res;
      setLanguage(lang);
      setCode(code);
      console.log(res);
    }
    if (codeId) fetchData();
  }, [codeId]);

  return <section ref={editorRef} />;
};
