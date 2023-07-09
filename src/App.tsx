import "allotment/dist/style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ide from "./components/Ide/Ide";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Ide />} />
            <Route path="/:codeId" element={<Ide />} />
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </StrictMode>
  );
};

const root = document.getElementById("root") as HTMLElement;
createRoot(root).render(<App />);
