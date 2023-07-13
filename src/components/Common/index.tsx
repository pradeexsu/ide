// @ts-nocheck
import { languagetoText, textToLanguage } from "../../utils/mapper";
import {
  getDisplayLanguage,
  langList,
  textToTheme,
  themeToText,
} from "../Editor/extensions";
import { Languages, Themes } from "../Editor/typings";

type Props = {
  text?: string;
  onClick: () => void;
};

export const Button = ({ text, onClick }: Props) => (
  <button className="btn btn-style py-[2px]" onClick={onClick}>
    {text && <span className="ml-2 ">{text}</span>}
  </button>
);

export const PlayButton = ({ onClick }: Props) => (
  <button className="btn play-btn-style" onClick={onClick}>
    <span className="mr-2 py-[2px] text-lg">▶</span>
    <span className="py-[2px]">Play</span>
  </button>
);

type DropDownLangProps = {
  onChange: (val: Languages) => void;
  value: Languages;
};
export const DropDownLang = ({ onChange, value }: DropDownLangProps) => (
  <select
    className="dropdown-style"
    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
      const target = e?.nativeEvent?.target as EventTarget;
      if (target !== null) onChange(textToLanguage(target?.value as string));
    }}
    value={languagetoText(value)}
  >
    {langList.map((lang) => (
      <option className="drop-down-item" value={lang} key={lang}>
        {getDisplayLanguage(lang)}
      </option>
    ))}
  </select>
);

type DropDownThemeProps = {
  onChange: (val: Themes) => void;
  value: Themes;
};

export const DropDownTheme = ({ onChange, value }: DropDownThemeProps) => (
  <select
    className="dropdown-style"
    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
      const target = e?.nativeEvent?.target as EventTarget;
      if (target !== null) onChange(textToTheme[target?.value]);
    }}
    value={themeToText(value)}
  >
    {Object.keys(textToTheme).map((theme) => (
      <option className="drop-down-item" value={theme} key={theme}>
        {theme}
      </option>
    ))}
  </select>
);

export const Loader = () => (
  <div
    className="absolute ml-[40%] mt-[5%]  flex flex-wrap p-5"
  >
    <span className="h-5 w-5 animate-loading1 rounded-full  bg-[#f15c6c]" />
    <span className="h-5 w-5 animate-loading2 rounded-full bg-[#f15c6c]" />
    <span className="h-5 w-5 animate-loading3 rounded-full bg-[#f15c6c]" />
  </div>
);
