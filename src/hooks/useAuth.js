// LIBRARY IMPORTS
import { use, useState } from "react";

// UTILITY
import * as Auth from "../utils/auth";
import * as Token from "../utils/token";

const useAuth = (setIsLoading, openModal, closeModal) => {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // All the setTimeout callbacks are to show loading states without jarring UI flashes.

  const handleRegistration = async (data) => {
    setIsLoading(true);
    try {
      const userData = await Auth.register(data);
      if (userData) {
        setTimeout(() => {
          openModal("Feedback", {
            message:
              "Welcome! Registration Successfully completed! Please sign in.",
            type: "sign-up-success",
          });
          setIsLoading(false);
        }, 2000);
      }
    } catch (err) {
      console.error(err);
      if (err.message === "Email already in use") {
        setIsLoading(false);
        openModal("Sign up", {
          registrationEmailError: "This email is not available",
        });
        return;
      }
      setTimeout(() => {
        if (err.message === "Failed to fetch") {
          openModal("Feedback", {
            message:
              "Unable to connect to server. Please check your connection and try again.",
            type: "error",
          });
          return;
        }
        openModal("Feedback", {
          message: "Somthing went wrong. Please try again.",
          type: "error",
        });
        setIsLoading(false);
      }, 1000);
    }
  };

  const handleLogin = async (data) => {
    setIsLoading(true);

    try {
      const tokenData = await Auth.login(data);

      if (!tokenData.token) {
        throw new Error("Incorrect email or password");
      }

      const userData = await Auth.getCurrentUser(tokenData.token);

      // If a token is issued but getCurrentUser fails, don't save the token and message the user to try again.
      if (!userData) {
        throw new Error("Somthing, went wrong... Please try again");
      }

      Token.saveToken(tokenData.token);
      setTimeout(() => {
        setIsLoading(false);
        setCurrentUser(userData);
        setIsLoggedIn(true);
        openModal("Feedback", {
          message: `Welcome ${userData.name}!`,
          type: "success",
        });

        // This is just to automatically close the success modal.
        setTimeout(() => {
          closeModal();
        }, 2000);
      }, 1000);
    } catch (err) {
      console.error(err);

      if (err.message === "Incorrect email or password") {
        setTimeout(() => {
          setIsLoading(false);
          openModal("Feedback", {
            message: err.message,
            type: "error",
          });
        }, 1000);
      } else {
        setTimeout(() => {
          setIsLoading(false);
          openModal("Feedback", {
            message: "Somthing, went wrong... Please try again",
            type: "error",
          });
        }, 1000);
      }
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
