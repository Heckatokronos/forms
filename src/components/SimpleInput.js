import Input from "../shared/UI/Input/Input";

import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

  const nameInputChagneHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmitionHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);
    console.log(enteredName);
    setEnteredName("");
  };

  const nameInputClasses = enteredNameIsValid
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={formSubmitionHandler}>
      <div className={nameInputClasses}>
        <Input
          type="text"
          id="name"
          label="Ваше имя"
          onChange={nameInputChagneHandler}
          value={enteredName}
        />
        {!enteredNameIsValid && (
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
