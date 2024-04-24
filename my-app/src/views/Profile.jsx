import { useEffect } from "react";
import { useUser } from "../hooks/apiHooks.js";
import { useUserContext } from "../contexts/UserContext.jsx";
import UserData from "../components/UserData.jsx";

const Profile = () => {
  const { user, setUser } = useUserContext(null);
  const { getUserByToken } = useUser();

  const getUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const userData = await getUserByToken(token);
      setUser(userData.user);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      This is the profile page.
      <div>
        <UserData />
      </div>
    </>
  );
};
export default Profile;
