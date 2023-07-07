import { useState } from "react";
import useSound from "use-sound";
import { MoonIcon } from "./assets/MoonIcon";
import { SunIcon } from "./assets/SunIcon";
import boopSfx from "./toot-light-sound.mp3";

const ThemeModeToggler = () => {
  const [dark, toggleDark] = useState(true);

  const [play] = useSound(boopSfx);
  const toggleMode = () => {
    toggleDark(!dark);
    play();
  };
  return (
    <button
      onClick={toggleMode}
      className="absolute my-2 select-none text-gray-50 [&>*]:outline-none"
    >
      {(dark && <MoonIcon />) || <SunIcon />}
    </button>
  );
};

export default ThemeModeToggler;
