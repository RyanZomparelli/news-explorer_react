import "../blocks/modalWithForm.css";

// COMPONENTS
import ModalWithForm from "./ModalWithForm";

// CUSTOM HOOKS
import useFormWithValidation from "../hooks/useFormWithValidation";

const LoginModal = ({ activeModal, onOpen, onClose }) => {
  const { values, errors, isValid, handleChange, getErrorMsg, resetForm } =
    useFormWithValidation({
      email: "",
      password: "",
    });
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
        isValid={isValid}
        resetForm={resetForm}
      >
        <fieldset className="modal-form__inputs">
          <label htmlFor="login-email" className="modal-form__label">
            Email
          </label>
          <input
            id="login-email"
            type="email"
            name="email"
            value={values.email}
            className="modal-form__input"
            placeholder="Enter email"
            required
            onChange={handleChange}
          />
          <span className="modal-form__error modal-form__error_email">
            {getErrorMsg("email", "Please Enter a valid email")}
          </span>
          <label htmlFor="login-password" className="modal-form__label">
            Password
          </label>
          <input
            id="login-password"
            type="password"
            name="password"
            value={values.password}
            className="modal-form__input"
            placeholder="Enter password"
            required
            onChange={handleChange}
          />
          <span className="modal-form__error modal-form__error_password">
            {errors.password}
          </span>
        </fieldset>
      </ModalWithForm>
    </>
  );
};

export default LoginModal;
