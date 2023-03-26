import { useEffect, useState } from "react";
import Input from "../shared/UI/Input/Input";
import useInput from "../shared/UI/Hooks/useInput";

const BasicForm = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChagneHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredSecondName,
    isValid: enteredSecondNameIsValid,
    hasError: secondNameInputHasError,
    valueChagneHandler: secondNameChangedHandler,
    inputBlurHandler: secondNameBlurHandler,
    reset: resetSecondNameInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredThirdName,
    isValid: enteredThirdNameIsValid,
    hasError: thirdNameInputHasError,
    valueChagneHandler: thirdNameChangedHandler,
    inputBlurHandler: thirdNameBlurHandler,
    reset: resetThirdNameInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChagneHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    if (
      enteredNameIsValid &&
      enteredEmailIsValid &&
      enteredSecondNameIsValid &&
      enteredThirdNameIsValid
    ) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [
    enteredNameIsValid,
    enteredEmailIsValid,
    enteredSecondNameIsValid,
    enteredThirdNameIsValid,
  ]);

  const formSubmitionHandler = (event) => {
    event.preventDefault();

    resetNameInput();
    resetEmailInput();
    resetSecondNameInput();
    resetThirdNameInput();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const secondNameInputClasses = secondNameInputHasError
    ? "form-control invalid"
    : "form-control";

  const thirdNameInputClasses = thirdNameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitionHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <Input
            id="name"
            type="text"
            label="Имя"
            value={enteredName}
            onChange={nameChangedHandler}
            onBlur={nameBlurHandler}
          />
          {nameInputHasError && (
            <p className="error-text">Имя не может быть пустым.</p>
          )}
        </div>
        <div className={secondNameInputClasses}>
          <Input
            id="name"
            type="text"
            label="Фамилия"
            value={enteredSecondName}
            onChange={secondNameChangedHandler}
            onBlur={secondNameBlurHandler}
          />
          {secondNameInputHasError && (
            <p className="error-text">Фамилия не может быть пустой.</p>
          )}
        </div>
        <div className={thirdNameInputClasses}>
          <Input
            id="name"
            type="text"
            label="Отчество"
            value={enteredThirdName}
            onChange={thirdNameChangedHandler}
            onBlur={thirdNameBlurHandler}
          />
          {thirdNameInputHasError && (
            <p className="error-text">Отчество не может быть пустым.</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <Input
          id="e-mail"
          type="e-mail"
          label="E-mail адрес"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailInputHasError && (
          <p className="error-text">
            Проверьте корректность написания E-mail адреса.
          </p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Отправить</button>
      </div>
    </form>
  );
};

export default BasicForm;
