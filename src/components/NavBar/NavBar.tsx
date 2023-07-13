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
import { Ballon } from "../Common/assets/Logo";
import { useHeartBeat } from "../../utils/hooks/useHeartBeat";
import { FetchStatus } from "../../utils/hooks/useSavedCode";

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

  const heartBeat = useHeartBeat();
  const navigate = useNavigate();

  const saveCodeToServer = async () => {
    try {
      const code1 = view?.state?.doc?.toString();
      const res = await saveCode({
        lang: languagetoText(language),
        code: code1,
      });
      if(res?.success && res?.data?.id){
        navigate(`/${res?.data?.id}`);
      }else{
        void setErrorNotification(res?.errorMessage || 'Something went wrong 😶‍🌫️');
      }

    } catch (err) {
      setErrorNotification("something went wrong! try again later");
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

      if(data?.success){
        setOutput(data?.data?.output || '')
      }else{
        setErrorNotification(data?.errorMessage || 'Something went wrong ')        
      }
      setShowIo(true);
    } catch (err) {
      setErrorNotification("something went wrong! try again later");
    } finally {
      setExecuting(false);
    }
  };

  const getHeartBeatSatusColor = () => {
    switch (heartBeat) {
      case FetchStatus.None:
        return "bg-orange-400";
      case FetchStatus.Success:
        return "bg-green-500";
      case FetchStatus.Failed:
        return "bg-red-700";
      case FetchStatus.Fetching:
        return "bg-orange-400";
    }
  };
  return (
    <div>
      <NotificationLane />
      <nav className="via-20% flex  justify-between bg-black backdrop-blur-xl ">
        <span>
          <span className="start flex h-14">
            <span className="w-30 mt-1 ml-[-35px] h-0 scale-[.45]">
              <Ballon />
            </span>
            <span
              className="relative ml-[-50px] mt-2 flex h-4 w-4"
              title={"backend connected"}
            >
              <span
                className={`absolute inline-flex h-4 w-4 animate-beat rounded-full ${getHeartBeatSatusColor()} opacity-75`}
              ></span>
              <span
                className={`relative m-1 inline-flex h-2 w-2 rounded-full  ${getHeartBeatSatusColor()}`}
              ></span>
            </span>
          </span>
        </span>
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
