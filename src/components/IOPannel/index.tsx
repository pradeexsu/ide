// @ts-nocheck
import { Allotment } from "allotment";
import { Loader } from "../Common";
import "allotment/dist/style.css";
import { useEditorStore } from "../../store/store";

export const IOBar = () => {
  const { showIo, toggleShowIo, output, setInput, executing } =
    useEditorStore();

  return (
    showIo && (
      <div className="fixed inset-x-0 bottom-0 h-96 w-full border-none  text-black outline-none">
        <button
          className="relative top-14 z-10 float-right ml-auto mr-5 h-10 w-10 select-none rounded-full p-2 text-center  hover:bg-[#fff1] active:bg-[#fff2]"
          onClick={toggleShowIo}
        >
          <span className=" text-white">{"╳"}</span>
        </button>
        <Allotment defaultSizes={[500, 500]}>
          <Allotment.Pane>
            <textarea
              className="h-full w-full resize-none bg-[#000d] p-4 text-white/60 outline-none selection:bg-[#6f42c1]"
              onChange={(event) => setInput(event.target.value)}
            />
          </Allotment.Pane>
          <Allotment.Pane snap>
            {<Loader hidden={executing} />}
            <textarea
              className="h-full w-full resize-none bg-[#000d] p-4 text-white/60 outline-none selection:bg-[#6f42c1]"
              disabled
              value={output}
            />
          </Allotment.Pane>
        </Allotment>
      </div>
    )
  );
};
