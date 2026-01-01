// LIBRARY IMPORTS
import { useState } from "react";

// UTILITY
import * as Auth from "../utils/auth";
import * as Token from "../utils/token";

const useAuth = (setIsLoading, openModal, closeModal) => {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleRegistration = async (data) => {
    setIsLoading(true);

    try {
      const userData = await Auth.register(data);
      if (userData) {
        setTimeout(() => setIsLoading(false), 2000);
        openModal(
          "Feedback",
          "Registration Successfully completed!",
          "sign-up-success"
        );
      }
    } catch (err) {
      console.error(err);
      openModal("sign up", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (data) => {
    setIsLoading(true);
    closeModal();

    try {
      const token = await Auth.login(data);

      if (token) {
        Token.saveToken(token);
        const user = await Auth.getCurrentUser(token);
        if (user) {
          setTimeout(() => {
            setIsLoading(false);
            setCurrentUser(user.data);
            setIsLoggedIn(true);
          }, 1000);
        }
      }
    } catch (err) {
      console.error(err);
      setTimeout(() => {
        setIsLoading(false);
        openModal(
          "Feedback",
          "We're sorry, Somthing went wrong. Please try again.",
          "error"
        );
      }, 1000);
    } finally {
    }
  };

  const handleSignOut = () => {
    setIsLoading(true);
    Token.deleteToken();
    setTimeout(() => {
      setIsLoading(false);
      setCurrentUser({});
      setIsLoggedIn(false);
    }, 1000);
  };

  return {
    currentUser,
    isLoggedIn,
    setCurrentUser,
    setIsLoggedIn,
    handleRegistration,
    handleLogin,
    handleSignOut,
  };
};

export default useAuth;
