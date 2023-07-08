import "allotment/dist/style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ide from "./components/Ide/Ide";
import ReactDOM from "react-dom/client";
import React from "react";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Ide />} />
            <Route path="/:codeId" element={<Ide />} />
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </React.StrictMode>
  );
};

const root = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(root).render(<App />);
