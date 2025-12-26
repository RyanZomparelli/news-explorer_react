import "../blocks/app.css";

// LIBRARY IMPORTS
import { useState } from "react";

// COMPONENTS
import Main from "./Main";
import LoginModal from "./LoginModal";
import RegistrationModal from "./RegistrationModal";

// CUSTOM HOOKS
import useModal from "../hooks/useModal";

function App() {
  // To keep App clean and consolidate all mmodal logic, I created a custom hook.
  const { activeModal, openModal, closeModal } = useModal();
  return (
    <div className="app">
      <Main openModal={openModal} activeModal={activeModal} />
      <LoginModal
        activeModal={activeModal === "Sign in"}
        onOpen={openModal}
        onClose={closeModal}
      />
      <RegistrationModal
        activeModal={activeModal === "Sign up"}
        onOpen={openModal}
        onClose={closeModal}
      />
    </div>
  );
}

export default App;
