import { CustomSpinner } from "components/animations";
import { chatting_app_auth } from "components/firebase/chatting-app-firebase";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useRef, useState, useEffect } from "react";

export const ChattingAuthContext = createContext<any | null>(null);

export const ChattingAuthProvider = ({ children }: any) => {
  const didMountRef = useRef<boolean>(false);
  const [chattingUser, setChattingUser] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      onAuthStateChanged(chatting_app_auth, (user) => {
        setChattingUser(user);
        setLoading(false);
      });
    }
  }, []);

  return (
    <>
      {loading ? (
        <CustomSpinner />
      ) : (
        <ChattingAuthContext.Provider value={{ chattingUser }}>
          {children}
        </ChattingAuthContext.Provider>
      )}
    </>
  );
};
