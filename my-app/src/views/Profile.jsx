import { useEffect, useState } from "react";
import { useUser } from "../hooks/apiHooks.js";

const Profile = () => {
  const [user, setUser] = useState(null);
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
        {user && (
          <>
            <p>Käyttäjätunnus: {user.username}</p>
            <p>email: {user.email}</p>
            <p>luotu: {new Date(user.created_at).toLocaleString()}</p>
          </>
        )}
      </div>
    </>
  );
};
export default Profile;
