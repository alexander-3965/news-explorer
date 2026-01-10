import ModalWithForm from "../ModalWithForm/modalWithForm";
import { useForm } from "../Hooks/useForm";

const RegisterModal = ({
  isOpen,
  onRegister,
  onCloseModal,
  handleLogInClick,
}) => {
  const defaultValues = {
    email: "",
    password: "",
    name: "",
  };

  const { setValues, values, handleChange } = useForm(defaultValues);

  function handleSubmit(evt) {
    evt.preventDefault();
    onRegister(values)
      .then(() => {
        setValues(defaultValues);
      })
      .catch(console.error);
  }

  return (
    <ModalWithForm
      buttonText="Sign Up"
      title="Sign Up"
      redirectButtonText="Sign In"
      onCloseModal={onCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      onRedirect={handleLogInClick}
    >
      <label htmlFor="registerEmail" className="modal__label">
        Email*{" "}
        <input
          type="email"
          className="modal__input"
          id="registerEmail"
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="registerPassword" className="modal__label">
        Password*
        <input
          type="password"
          className="modal__input"
          id="registerPassword"
          name="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="registerName" className="modal__label">
        Name *
        <input
          type="text"
          className="modal__input"
          id="registerName"
          name="name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
        />
      </label>
    </ModalWithForm>
  );
};

export default RegisterModal;
