import { createContext, useContext, useState } from "react";
import { useAuthentication, useUser } from "../hooks/apiHooks.js";
import { useNavigate } from "react-router-dom";

const UserContext = createContext(undefined);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { login } = useAuthentication();
  const navigate = useNavigate();
  const { getUserByToken } = useUser();

  console.log("user in UserProvider", user);

  const handleLogin = async (credentials) => {
    console.log("credentials", credentials);
    try {
      const userData = await login(credentials);
      console.log("userData", userData);
      localStorage.setItem("token", userData.token);
      setUser(userData.user);
      navigate("/");
    } catch (e) {
      alert(e.message);
    }
  };

  const handleLogout = () => {
    try {
      localStorage.removeItem("token");
      setUser(undefined);
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleAutoLogin = async () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const userData = await getUserByToken(token);
        setUser(userData.user);
        navigate("/");
      }
    } catch (e) {
      console.log(e.message);
    }
  };
  // todo poista setUser
  return (
    <UserContext.Provider
      value={{ user, setUser, handleLogin, handleLogout, handleAutoLogin }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserProvider.defaultProps = {
  children: null,
};

export const useUserContext = () => useContext(UserContext);
