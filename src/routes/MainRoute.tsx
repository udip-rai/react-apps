import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Layout } from "components/layout/Layout";
import { AppsPage, HomePage, ProgrammingPage } from "pages";

export {};

export const MainRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Outlet />}>
            <Route index element={<HomePage />} />
            <Route path="/apps" element={<AppsPage />} />
            <Route path="/websites" element={<AppsPage />} />
            <Route path="/programming" element={<ProgrammingPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
