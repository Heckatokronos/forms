import { useState } from "react";
import Input from "../shared/UI/Input/Input";

const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputChagneHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
  };

  const formSubmitionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    setEnteredName("");
    setEnteredNameTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitionHandler}>
      <div className={nameInputClasses}>
        <Input
          type="text"
          id="name"
          label="Ваше имя"
          onChange={nameInputChagneHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Имя не может быть пустым.</p>
        )}
      </div>
      <div className="form-actions">
        <button>Отправить</button>
      </div>
    </form>
  );
};

export default SimpleInput;
