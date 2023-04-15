import { createContext, useEffect, useState } from "react";
import { onAuthStateChangeListner } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({ 
  currentUser: null,
  setCurrentUser: () => null,
  isSignOutOpen: false,
  setIsSignOutOpen: () => {},
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isSignOutOpen, setIsSignOutOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListner((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    setCurrentUser,
    isSignOutOpen,
    setIsSignOutOpen,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
