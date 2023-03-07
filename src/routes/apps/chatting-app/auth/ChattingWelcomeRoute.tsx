import { Navigate } from "react-router-dom";

export const ChattingWelcomeRoute = ({ chattingUser, children }: any) =>
  chattingUser ? <Navigate to="/apps/chatting-app/welcome" /> : children;
