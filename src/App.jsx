import React from "react";
import { createRoot } from "react-dom/client";
import { NavBar } from "./components/NavBar/NavBar";
import { IOBar } from "./components/IOPannel";
import "allotment/dist/style.css";
import { Editor } from "./components/Editor";
import BgTecture from "./components/Asset/BgTexture";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Ide = () => {
  return (
    <div className="inset-y-0 min-h-screen w-full ">
      <NavBar />
      <BgTecture />
      <Editor />
      <IOBar />
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Ide />} />
        <Route path="/:codeId" element={<Ide />} />
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
