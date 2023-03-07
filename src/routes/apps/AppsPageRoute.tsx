import { Route, Routes } from "react-router-dom";
import { AppsPage } from "pages";
import { PaginationApp } from "components/pages/apps/pagination-app";
import { WeatherApp } from "components/pages/apps/weather-app";
import { ChattingAuthProvider } from "context/ChattingAppAuth";
import { ChattingAppRoute } from "./chatting-app/ChattingAppRoute";

export const AppsPageRoute = () => {
  return (
    <ChattingAuthProvider>
      <Routes>
        <Route index element={<AppsPage />} />
        <Route path="weather-app" element={<WeatherApp />} />
        <Route path="pagination-app" element={<PaginationApp />} />
        <Route path="chatting-app/*" element={<ChattingAppRoute />} />
      </Routes>
    </ChattingAuthProvider>
  );
};
