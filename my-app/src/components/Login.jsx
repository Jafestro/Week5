// imports

import LoginForm from "./LoginForm.jsx";
import RegisterForm from "./RegisterForm.jsx";
import { useState } from "react";
import Button from "./UI/Button.jsx";

const Login = () => {
  const [toggleForm, setToggleForm] = useState(true);

  const toggle = () => {
    setToggleForm(!toggleForm);
  };

  return (
    <>
      {toggleForm ? <LoginForm /> : <RegisterForm />}
      <br />
      <br />
      <Button
        text={toggleForm ? "Not register yet?" : "Go to login"}
        handleClick={toggle}
      />
    </>
  );
};

export default Login;
