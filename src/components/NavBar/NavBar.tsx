import { execute } from "../../services/executor";
import { saveCode } from "../../services/saveCode";
import { useEditorStore } from "../../store/store";
import { Button, DropDownLang, DropDownTheme, PlayButton } from "../Common";
import { getTemplate } from "../Editor/constant";
import { useNavigate } from "react-router-dom";
import NotificationLane from "../Common/notification-lane";
import { languagetoText } from "../../utils/mapper";
import { Languages, Themes } from "../Editor/typings";
import ThemeModeToggler from "../Common/toggle-mode";

export const NavBar = () => {
  const {
    toggleShowIo,
    setLanguage,
    setCode,
    view,
    input,
    setOutput,
    language,
    setShowIo,
    theme,
    setTheme,
    setExecuting,
    setErrorNotification,
  } = useEditorStore();

  const navigate = useNavigate();

  const saveCodeToServer = async () => {
    try {
      const code1 = view?.state?.doc?.toString();

      const res = await saveCode({
        lang: languagetoText(language),
        code: code1,
      });
      console.log(res);
      navigate(`/${res?.id}`);
    } catch (err) {
      setErrorNotification("something went wrong! try again later");
      navigate("/");
    }
  };

  const langChangeHandler = (lang: Languages) => {
    setLanguage(lang);
    setCode(getTemplate(lang));
  };

  const themeChangeHandler = (theme: Themes) => {
    setTheme(theme);
  };

  const runCodeHandler = async () => {
    try {
      setOutput("");
      setExecuting(true);
      const code: string = view?.state?.doc?.toString() || "";
      const data = await execute({
        lang: languagetoText(language),
        code,
        input,
      });
      setOutput(data?.output || "");
    } catch (err) {
      setErrorNotification("something went wrong! try again later");
    } finally {
      setExecuting(false);
      setShowIo(true);
    }
  };

  return (
    <div>
      <NotificationLane />
      <nav className="flex justify-between bg-[#191c1f]">
        <div className="start my-auto flex flex-wrap gap-8">
          <img src="/public/favicon.png" alt="p-logo" className="h-12" />
        </div>

        <div className="flex-end mr-5  flex gap-4 ">
          <DropDownLang onChange={langChangeHandler} value={language} />
          <DropDownTheme onChange={themeChangeHandler} value={theme} />
          <Button text={"🖇️ Input"} onClick={() => toggleShowIo()} />
          <Button text={"🔗 Save"} onClick={() => void saveCodeToServer()} />
          <PlayButton onClick={() => void runCodeHandler()} />

          <span className="mr-10 mt-1 text-xs">
            <ThemeModeToggler />
          </span>
        </div>
      </nav>
    </div>
  );
};
