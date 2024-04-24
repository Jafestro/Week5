// LoginForm.jsx
import useForm from "../hooks/formHooks.js";
import { useUserContext } from "../contexts/UserContext.jsx";

const LoginForm = () => {
  const { handleLogin } = useUserContext();

  const initValues = {
    username: "",
    password: "",
  };

  const { handleSubmit, handleInputChange, inputs } = useForm(
    () => handleLogin(inputs),
    initValues,
  );

  console.log(inputs);

  return (
    <>
      <br />
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="loginuser">Username</label>
          <input
            name="username"
            type="text"
            id="loginuser"
            onChange={handleInputChange}
            autoComplete="username"
          />
        </div>
        <div>
          <label htmlFor="loginpassword">Password</label>
          <input
            name="password"
            type="password"
            id="loginpassword"
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </div>
        <button
          type="submit"
          className={
            "bg-amber-200 border-8 border-r-amber-500 border-l-amber-600 border-t-amber-700 border-b-amber-800"
          }
        >
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;
