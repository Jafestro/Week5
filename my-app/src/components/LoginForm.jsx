// LoginForm.jsx
import useForm from "../hooks/formHooks.js";
import { useAuthentication } from "../hooks/apiHooks.js";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { login } = useAuthentication();
  const navigate = useNavigate();

  const initValues = {
    username: "",
    password: "",
  };

  const doLogin = async () => {
    console.log("doLogin", inputs);
    try {
      const userData = await login(inputs);
      console.log("userData", userData);
      localStorage.setItem("token", userData.token);
      navigate("/");
    } catch (e) {
      alert(e.message);
    }
  };

  const { handleSubmit, handleInputChange, inputs } = useForm(
    doLogin,
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
