import React from "react";
import { createRoot } from "react-dom/client";
import { NavBar } from "./components/NavBar/NavBar";
import { IOBar } from "./components/IOPannel";
import "allotment/dist/style.css";
import { Editor } from "./components/Editor";

const App = () => {
  return (
    <div className="inset-y-0 min-h-screen w-full ">
      <NavBar />
      {/* <Loader /> */}
      <Editor />
      <IOBar />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
