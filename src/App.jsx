import React from "react";
import { createRoot } from "react-dom/client";
import { NavBar } from "./components/NavBar/NavBar";
import { Loader } from "./components/Common";

const App = () => {
  return (
    <div>
      <NavBar />
      <Loader />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
