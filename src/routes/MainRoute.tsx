import { HomePage } from "pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export {};

export const MainRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};
