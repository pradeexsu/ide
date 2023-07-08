import BgTexture from "../BgTexture";
import { Editor } from "../Editor";
import { IOBar } from "../IOPannel";
import { NavBar } from "../NavBar/NavBar";

const Ide = () => {
  return (
    <div className="inset-y-0 min-h-screen w-full ">
      <BgTexture />
      <NavBar />
      <Editor />
      <IOBar />
    </div>
  );
};
export default Ide;
