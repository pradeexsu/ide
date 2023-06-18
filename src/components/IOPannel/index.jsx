import { Allotment } from "allotment";
import { CloseIcon } from "../Common";
import "allotment/dist/style.css";
import { useStore } from "../../store/store";

export const IOBar = () => {
  const { showIo, toggleShowIo } = useStore();
  return (
    showIo && (
      <div className="fixed inset-x-0 bottom-0 h-96 w-full border-none  text-black outline-none">
        <CloseIcon onClick={toggleShowIo} />
        <Allotment defaultSizes={[500, 500]}>
          <Allotment.Pane>
            <textarea className="h-full w-full resize-none bg-[#212529] p-4 text-white/60 outline-none selection:bg-[#c26dab]" />
          </Allotment.Pane>
          <Allotment.Pane snap>
            <textarea
              className="h-full w-full resize-none bg-[#212529] p-4 text-white/60 outline-none selection:bg-[#c26dab]"
              disabled
            />
          </Allotment.Pane>
        </Allotment>
      </div>
    )
  );
};
