import "../blocks/modalWithForm.css";

// COMPONENTS
import ModalWithForm from "./ModalWithForm";

const LoginModal = ({ activeModal, onOpen, onClose }) => {
  return (
    <>
      <ModalWithForm
        title="Sign in"
        name="sign-in"
        submitText="Sign in"
        altText="Sign up"
        activeModal={activeModal}
        onOpen={onOpen}
        onClose={onClose}
      >
        <fieldset className="modal-form__inputs">
          <label htmlFor="login-email" className="modal-form__label">
            Email
          </label>
          <input
            id="login-email"
            type="email"
            className="modal-form__input"
            placeholder="Enter email"
          />
          <label htmlFor="login-password" className="modal-form__label">
            Password
          </label>
          <input
            id="login-password"
            type="password"
            className="modal-form__input"
            placeholder="Enter password"
          />
        </fieldset>
      </ModalWithForm>
    </>
  );
};

export default LoginModal;
