import { Navigate, Outlet } from "react-router-dom";

export const ChattingProtectedRoute = ({ chattingUser }: any) =>
  !chattingUser ? (
    <Navigate to="/apps/chatting-app/login" replace />
  ) : (
    <Outlet />
  );
