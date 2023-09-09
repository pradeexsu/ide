import { execute } from "../../services/executor";
import { saveCode } from "../../services/saveCode";
import { useEditorStore } from "../../store/store";
import { Button, DropDownLang, DropDownTheme, PlayButton } from "../Common";
import { getTemplate } from "../Editor/constant";
import { useNavigate } from "react-router-dom";
import NotificationLane from "../Common/notification-lane";
import { languagetoText } from "../../utils/mapper";
import { Languages, Themes } from "../Editor/typings";
import { Ballon } from "../Common/assets/Logo";
import { useHeartBeat } from "../../utils/hooks/useHeartBeat";
import { FetchStatus } from "../../utils/hooks/useSavedCode";
import Tippy from "@tippyjs/react";

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
      if (res?.success && res?.data?.id) {
        navigate(`/${res?.data?.id}`);
      } else {
        void setErrorNotification(
          res?.errorMessage || "Something went wrong 😶‍🌫️"
        );
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

      if (data?.success) {
        setOutput(data?.data?.output || "");
      } else {
        setErrorNotification(data?.errorMessage || "Something went wrong ");
      }
      setShowIo(true);
    } catch (err) {
      setErrorNotification("something went wrong! try again later");
    } finally {
      setExecuting(false);
    }
  };

  const getHeartBeatStatusColor = () => {
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

  const getHeartBeatStatus = () => {
    switch (heartBeat) {
      case FetchStatus.None:
        return "trying to connecting server";
      case FetchStatus.Success:
        return "server is normal and up";
      case FetchStatus.Failed:
        return "server is down!";
      case FetchStatus.Fetching:
        return "connecting with server";
    }
  };

  return (
    <div>
      <NotificationLane />
      <nav className="flex justify-between  bg-black via-20% backdrop-blur-xl ">
        <span>
          <span className="start flex h-14">
            <span className="w-30 ml-[-35px] mt-1 h-0 scale-[.45]">
              <Ballon />
            </span>
            <Tippy
              arrow
              animation
              content={
                <span className="rounded-lg bg-slate-700/70 px-2 py-1 text-white">
                  {getHeartBeatStatus()}
                </span>
              }
              allowHTML
            >
              <span className="relative ml-[-50px] mt-2 flex h-4 w-4">
                <span
                  className={`absolute inline-flex h-4 w-4 animate-beat rounded-full ${getHeartBeatStatusColor()} opacity-75`}
                ></span>
                <span
                  className={`relative m-1 inline-flex h-2 w-2 rounded-full  ${getHeartBeatStatusColor()}`}
                ></span>
              </span>
            </Tippy>
          </span>
        </span>
        <div className="flex-end mr-5  flex gap-4 ">
          <DropDownLang onChange={langChangeHandler} value={language} />
          <DropDownTheme onChange={themeChangeHandler} value={theme} />
          <Button text={"Input"} onClick={() => toggleShowIo()} />
          <Button text={"Save"} onClick={() => void saveCodeToServer()} />
          <PlayButton onClick={() => void runCodeHandler()} />
          <a
            className="mt-3"
            href="https://github.com/pradeexsu/ide"
            title="fork me on github"
          >
            <img
              className="h-8 w-8"
              alt="github_logo"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAADs0lEQVR4nO2aSWxNURjHr3meaoiqELNoSCRiRxARJTEnQiOKGoPaGBeGlWhIkdiJWFhYsbCQio0EDY1hWW2IWJjbGmpoDT85cRbV3uG7557z3pPeX/I2L/d+5/9/97xzvu871/NSUlJSUjoowHBgLXAGqATqgAagRX8a9HeV+po16h7vfwIYDOwGqjHnPrBLxfJyFWAkcBr4gj2agAqgwMsVgG5AGfAZd6gf8SjQI9tmJwGPyRyPgInZMrvS8VMN4hOwPNNmS4AfZI+fwLZMmd1K7rArE9P4J7mD0rLMldnxwEdyD7WOTLZttrtgNS4H+gLTgEPAKwtmXgIHgak69smA6x6q7dGm4QMCcYVt7umh985fhlP1SNt9VxsPYq8tswU644kiL+D+pUAtcAFYB8wARgG99Wc0MBNYD1zUufWSgFhDIqZ2vg3Dp4VPpWfiwaK1qB8ojFM2CoEvQsNjrTkLXzjDaEpUcPC3YpEy36o7fz0LBTp2JhmgOobhw1bd+es5JtBxzzR4PvA7huFS6w7ba9oh0KE0DzMJviaG2ctOHPrruirQs9ok8Bmh2W+q+Hfizl/XWKA5QlOFSeBKoeHzTpyFa7sUoem6SdCnQsOLnLiKLmLCqDMJWi80nDy7MZvWYbwzCdosXBG7OHGVLOP6bhK0RfiEBzhxFb1lhtFiErRRaPifKikT6AIkjEaToHVCw2VOXIVr2x+h6YlJ0BtCw1VOXAXr6qTbtWHccJl4KFY4ceevq5hojpsEXouct8AEJw7bl4dvBHqKTIKPiFk81Lo8FQCmAM+E7aH+poPcI/6pQKnNvRnoCmyP0Yi4m2SwMsxQT3uL6kElGHuYLgclT7U1JUkMDwK+Yo6aXreBE/p4ZkrElN2o271Vht3O90AvY8MRTTzVaVwM1AjFVIWd8+q3BdQ1SSj3LKVxTT7Ba7TIPEGTXk3xgcIZ9cLQ7Pskf6F/APYFDHKl1f9NmQpiticEmGdouNT2Kf8Dn0HUtjVdXzNGNw2aWjXGn6vmusF4d2KaVdd3tmZYoRILve205axnGWBDzKTHTU8cKPI5CFdVVR/L4xQKzaqafY7NsdsBbPbJwM55FtEHcVGobavY5riBAJt8DsavAXMlq7EEQad0lY1xxAALJE2CBPGDUL22WV42AMZFJQsJYvtxMxOHdpLkfg/wwaHhep2advJyBWCoKrzbbl0J4ileq0M6axmUC4B+eiW/pRe2gYazpiTrrxrGRefZvWPfmJKSkpLSQfkDTBecFJWi3bEAAAAASUVORK5CYII="
            />
          </a>

          {/* <span className="mr-10 mt-1 text-xs">
            <ThemeModeToggler />
          </span> */}
        </div>
      </nav>
    </div>
  );
};
