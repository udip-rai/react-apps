import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Layout } from "components/layout/Layout";
import { HomePage, ProgrammingPage, WebsitesPage } from "pages";
import { AppsPageRoute } from "./apps/AppsPageRoute";

export {};

export const MainRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Outlet />}>
            <Route index element={<HomePage />} />
            <Route path="apps/*" element={<AppsPageRoute />} />
            <Route path="websites" element={<WebsitesPage />} />
            <Route path="programming" element={<ProgrammingPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
