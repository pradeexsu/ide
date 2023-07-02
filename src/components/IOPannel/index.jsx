import { Allotment } from "allotment";
import { CloseIcon, Loader } from "../Common";
import "allotment/dist/style.css";
import { useStore } from "../../store/store";

export const IOBar = () => {
  const { showIo, toggleShowIo, output, setInput, executing } = useStore();

  return (
    showIo && (
      <div className="fixed inset-x-0 bottom-0 h-96 w-full border-none  text-black outline-none">
        <CloseIcon onClick={toggleShowIo} />
        <Allotment defaultSizes={[500, 500]}>
          <Allotment.Pane>
            <textarea
              className="h-full w-full resize-none bg-[#000d] p-4 text-white/60 outline-none selection:bg-[#6f42c1]"
              onChange={(event) => setInput(event.target.value)}
            />
          </Allotment.Pane>
          <Allotment.Pane snap>
            {executing && <Loader />}
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
