// RegisterForm.jsx
import useForm from "../hooks/formHooks.js";
import { useUser } from "../hooks/apiHooks.js";

const RegisterForm = () => {
  const { register } = useUser();

  const initValues = {
    username: "",
    password: "",
    email: "",
  };

  const doRegister = async () => {
    console.log("doRegister", inputs);
    try {
      const userData = await register(inputs);
      console.log("userData", userData);
      localStorage.setItem("token", userData.token);
    } catch (e) {
      alert(e.message);
    }
  };

  const { handleSubmit, handleInputChange, inputs } = useForm(
    doRegister,
    initValues,
  );

  console.log(inputs);

  return (
    <>
      <br />
      <br />
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="registeruser">Username</label>
          <input
            name="username"
            type="text"
            id="registeruser"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="registeremail">Email</label>
          <input
            name="email"
            type="email"
            id="registeremail"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="registerpassword">Password</label>
          <input
            name="password"
            type="password"
            id="registerpassword"
            onChange={handleInputChange}
          />
        </div>
        <button
          type="submit"
          className={
            "bg-amber-200 border-8 border-r-amber-500 border-l-amber-600 border-t-amber-700 border-b-amber-800"
          }
        >
          Register
        </button>
      </form>
      <br />
    </>
  );
};

export default RegisterForm;
