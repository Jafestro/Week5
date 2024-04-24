import { useUserContext } from "../contexts/UserContext.jsx";

const UserData = () => {
  const { user } = useUserContext();
  if (!user) return null;
  return (
    <>
      {user && (
        <>
          <p>Käyttäjätunnus: {user.username}</p>
          <p>email: {user.email}</p>
          <p>luotu: {new Date(user.created_at).toLocaleString()}</p>
        </>
      )}
    </>
  );
};

export default UserData;
