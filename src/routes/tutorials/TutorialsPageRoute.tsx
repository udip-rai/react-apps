import { ReactHookForm } from "components/pages/tutorials/ReactHookForm";
import { TutorialsPage } from "pages";
import { Routes, Route, Outlet } from "react-router-dom";

export const TutorialsPageRoute = () => {
  return (
    <Routes>
      <Route path="" element={<Outlet />}>
        <Route index element={<TutorialsPage />} />
        <Route path="react-hook-form" element={<ReactHookForm />} />
      </Route>
    </Routes>
  );
};
