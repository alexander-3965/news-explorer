import ModalWithForm from "../ModalWithForm/modalWithForm";
import { useForm } from "../Hooks/useForm";

const SignInModal = ({ isOpen, onSignIn, onCloseModal, handleSignUpClick }) => {
  const defaultValues = {
    email: "",
    password: "",
  };

  const { setValues, values, handleChange } = useForm(defaultValues);

  function handleSubmit(evt) {
    evt.preventDefault();
    onSignIn(values)
      .then(() => {
        setValues(defaultValues);
      })
      .catch(console.error);
  }

  return (
    <ModalWithForm
      buttonText="Sign In"
      title="Sign In"
      redirectButtonText="Sign Up"
      onCloseModal={onCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      onRedirect={handleSignUpClick}
    >
      <label htmlFor="email" className="modal__label">
        Email*{" "}
        <input
          type="email"
          className="modal__input"
          id="email"
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="password" className="modal__label">
        Password*
        <input
          type="password"
          className="modal__input"
          id="password"
          name="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
        />
      </label>
    </ModalWithForm>
  );
};

export default SignInModal;
