import { execute } from "../../services/executor";
import { saveCode } from "../../services/saveCode";
import { useStore } from "../../store/store";
import { Button, DropDown } from "../Common";
import {
  // fullScreenIcon,
  ioIcon,
  lang,
  linkIcon,
  playIcon,
  navIcon,
} from "./constants";
import { template } from "../Editor/constant";
import { useNavigate } from "react-router-dom";
import NotificationLane from "../Common/notification-lane";

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
    setExecuting,
  } = useStore();
  const navigate = useNavigate();

  const saveCodeToServer = async () => {
    try {
      const code1 = view?.state?.doc.toString();
      const res = await saveCode({ lang: language, code: code1 });
      console.log(res);
      navigate(`/${res.id}`);
    } catch (err) {
      navigate("/");

      setOutput("somethibng went wrong! try again later");
    }
  };

  const langChangeHandler = (val) => {
    setLanguage(val);
    setCode(template[val]);
  };
  const runCodeHandler = async () => {
    try {
      setOutput("");
      setExecuting(true);
      const code = view.state.doc.toString();
      const data = await execute(language, code, input);
      setOutput(data?.output);
    } catch (err) {
      setOutput("somethibng went wrong! try again later");
    } finally {
      setExecuting(false);
      setShowIo(true);
    }
  };

  return (
    <div>
      <NotificationLane />

      <nav className="flex justify-between bg-[#212529]">
        <div className="start my-auto flex flex-wrap gap-8">
          <img src={navIcon} alt="p-logo" className="h-12" />
        </div>

        <div className="flex-end mr-5  flex gap-4 text-sm">
          <DropDown arr={lang} onChange={langChangeHandler} value={language} />

          {[
            { icon: ioIcon, text: "Input!", onClick: toggleShowIo },
            { icon: linkIcon, text: "Save Code!", onClick: saveCodeToServer },
            // { icon: fullScreenIcon, text: "", onClick: toggleShowIo },
            {
              icon: playIcon,
              text: "Run",
              isPrimary: true,
              onClick: runCodeHandler,
            },
          ].map((item) => (
            <Button
              key={item.text}
              iconUrl={item.icon}
              text={item.text}
              isPrimary={item.isPrimary}
              onClick={item.onClick}
            />
          ))}

          {/* <span className="">
        <ThemeModeToggler />
      </span> */}
        </div>
      </nav>
    </div>
  );
};
