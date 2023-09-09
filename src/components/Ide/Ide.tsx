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
      <footer className="absolute bottom-0 right-0 mb-6 mr-6 text-white">
        <div>
          visit{" "}
          <a
            href="https://pradeexsu.github.io"
            className="hover:text-purple-500"
          >
            pradeexsu.github.io
          </a>
        </div>
      </footer>
    </div>
  );
};
export default Ide;
