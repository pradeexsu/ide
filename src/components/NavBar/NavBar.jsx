import { Button, DropDown } from "../Common";
import {
  fullScreenIcon,
  ioIcon,
  lang,
  linkIcon,
  playIcon,
  navIcon,
} from "./constants";

export const NavBar = () => (
  <nav className="flex justify-between bg-[#212529]">
    <div className="start my-auto flex flex-wrap gap-8">
      <img src={navIcon} alt="p-logo" className="h-12" />
    </div>

    <div className="flex-end mr-14  flex gap-4 text-sm">
      <DropDown arr={lang} />

      {[
        { icon: ioIcon, text: "Input!" },
        { icon: linkIcon, text: "Copy Link!" },
        { icon: fullScreenIcon, text: "" },
        { icon: playIcon, text: "Run", isPrimary: true },
      ].map((item) => (
        <Button
          iconUrl={item.icon}
          text={item.text}
          isPrimary={item.isPrimary}
        />
      ))}

      <span className="">
        <a className="" href="#">
          Dark/Light
        </a>
      </span>
    </div>
  </nav>
);
