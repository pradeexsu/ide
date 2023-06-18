import { javascript } from "@codemirror/lang-javascript";
import { nord } from "cm6-theme-nord";
import { EditorView, basicSetup } from "codemirror";
import { useEffect, useRef } from "react";
import "./style.css";

export const Editor = () => {
  const editorRef = useRef();

  useEffect(() => {
    if (editorRef.current === null) return;

    const view = new EditorView({
      parent: editorRef.current,
      extensions: [basicSetup, javascript(), nord],
    });
    return () => {
      view.destroy();
    };
  }, [editorRef.current]);

  return <section ref={editorRef} />;
};
