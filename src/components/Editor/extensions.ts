import { cpp } from "@codemirror/lang-cpp";
import { java } from "@codemirror/lang-java";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";

export const languages = {
  node: javascript(),
  cpp: cpp(),
  python: python(),
  java: java(),
};
