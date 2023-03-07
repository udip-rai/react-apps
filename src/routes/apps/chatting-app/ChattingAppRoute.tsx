import {
  ChattingWelcome,
  ChattingHome,
  ChattingRegister,
  ChattingLogin,
} from "components/pages/apps/chatting-app/pages";
import { ChattingAuthContext } from "context/ChattingAppAuth";
import { useContext } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { ChattingProtectedRoute } from "./auth/ChattingProtectedRoute";
import { ChattingWelcomeRoute } from "./auth/ChattingWelcomeRoute";

export const ChattingAppRoute = () => {
  const { chattingUser } = useContext(ChattingAuthContext);
  return (
    <Routes>
      <Route path="" element={<Outlet />}>
        <Route
          index
          element={
            <ChattingWelcomeRoute chattingUser={chattingUser}>
              <ChattingHome />
            </ChattingWelcomeRoute>
          }
        />

        <Route
          path="login"
          element={
            <ChattingWelcomeRoute chattingUser={chattingUser}>
              <ChattingLogin />
            </ChattingWelcomeRoute>
          }
        />

        <Route
          path="register"
          element={
            <ChattingWelcomeRoute chattingUser={chattingUser}>
              <ChattingRegister />
            </ChattingWelcomeRoute>
          }
        />

        {/* Redirecting to Login if the user is not authenticated */}
        <Route
          path="welcome"
          element={<ChattingProtectedRoute chattingUser={chattingUser} />}
        >
          <Route path="" element={<ChattingWelcome />} />
        </Route>
      </Route>
    </Routes>
  );
};
