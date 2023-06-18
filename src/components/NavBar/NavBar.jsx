import { useStore } from "../../store/store";
import { Button, DropDown } from "../Common";
import {
  fullScreenIcon,
  ioIcon,
  lang,
  linkIcon,
  playIcon,
  navIcon,
} from "./constants";

export const NavBar = () => {
  const { toggleShowIo } = useStore();

  return (
    <nav className="flex justify-between bg-[#212529]">
      <div className="start my-auto flex flex-wrap gap-8">
        <img src={navIcon} alt="p-logo" className="h-12" />
      </div>

      <div className="flex-end mr-5  flex gap-4 text-sm">
        <DropDown arr={lang} />

        {[
          { icon: ioIcon, text: "Input!", onClick: toggleShowIo },
          // { icon: linkIcon, text: "Copy Link!", onClick: toggleShowIo },
          // { icon: fullScreenIcon, text: "", onClick: toggleShowIo },
          {
            icon: playIcon,
            text: "Run",
            isPrimary: true,
            onClick: toggleShowIo,
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
  );
};
