import { Route, Routes } from "react-router-dom";
import { ChattingApp } from "components/apps/chatting-app";
import { PaginationApp } from "components/apps/pagination-app";
import { WeatherApp } from "components/apps/weather-app/WeatherApp";
import { AppsPage } from "pages";

export const AppsPageRoute = () => {
  return (
    <Routes>
      <Route index element={<AppsPage />} />
      <Route path="weather-app" element={<WeatherApp />} />
      <Route path="pagination-app" element={<PaginationApp />} />
      <Route path="chatting-app" element={<ChattingApp />} />
    </Routes>
  );
};
