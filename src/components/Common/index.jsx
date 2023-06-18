import { closeIcon } from "../IOPannel/constant";

export const Button = ({ iconUrl, text, isPrimary, onClick }) =>
  isPrimary ? (
    <button
      className="my-auto mr-2 flex h-8 select-none gap-1 rounded-full border-none bg-pink-500/60 py-1 px-4 text-white duration-200 hover:bg-purple-400/50 active:bg-red-600/75"
      onClick={onClick}
    >
      <img src={iconUrl} className="mr-1 h-5" />
      {text}
    </button>
  ) : (
    <button
      className="my-auto mr-2 flex h-8 select-none rounded-full border-none bg-white/5 py-[6px] px-[14px]   text-white hover:bg-white/10"
      onClick={onClick}
    >
      <img src={iconUrl} className="h-5" />
      {text && <span className="ml-2">{text}</span>}
    </button>
  );

export const DropDown = ({ arr }) => (
  <select className="my-auto mr-2 flex h-8 select-none appearance-none gap-1 rounded-full border-none bg-white/5 py-1 px-8 text-white outline-none hover:bg-white/10">
    {Object.keys(arr).map((key) => (
      <option className="drop-down-item" value={key} key={key}>
        {arr[key]}
      </option>
    ))}
  </select>
);
export const CloseIcon = ({ onClick }) => (
  <span
    className={
      "relative top-14 z-10 float-right mr-5 ml-auto h-10 w-10 select-none rounded-full p-2 text-center  hover:bg-[#fff1] active:bg-[#fff2]"
    }
    onClick={onClick}
  >
    <img className="h-6 w-6" src={closeIcon} />
  </span>
);

export const Loader = ({ hidden }) => (
  <div
    className="absolute mr-10 flex  flex-wrap p-5 text-center"
    hidden={hidden}
  >
    <span className="h-5 w-5 animate-loading1 rounded-full  bg-[#f15c6c]" />
    <span className="h-5 w-5 animate-loading2 rounded-full bg-[#f15c6c]" />
    <span className="h-5 w-5 animate-loading3 rounded-full bg-[#f15c6c]" />
  </div>
);

// --bs-blue: #BADA55;
// --bs-blue: #0d6efd;
// --bs-indigo: #6610f2;
// --bs-purple: #6f42c1;
// --bs-pink: #d63384;
// --bs-red: #dc3545;
// --bs-orange: #fd7e14;
// --bs-yellow: #ffc107;
// --bs-green: #198754;
// --bs-teal: #20c997;
// --bs-cyan: #0dcaf0;

// --primary-dark: #f15c6c;
// --primary: #c26dab;
// --secondary: #6666a4;
// --trertiary: #78a1d1;
