import { Link } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext.jsx";
// todo test it and write what there is not
const SiteNavigation = () => {
  const { user, handleLogout } = useUserContext();
  return (
    <nav className={"flex justify-evenly font-bold font-sans"}>
      <Link to="/">Etusivu 🏠</Link>
      {user !== undefined && (
        <>
          <Link to="/profile">Profile 🦩️(～￣▽￣)～</Link>
          <Link to="/upload">Upload 🌱</Link>
        </>
      )}
      {user ? (
        <Link
          to="/login"
          onClick={() => {
            console.log("Logout");
            handleLogout();
          }}
        >
          Logout 🔓
        </Link>
      ) : (
        <Link to="/login">Login 🚪</Link>
      )}
    </nav>
  );
};

SiteNavigation.propTypes = {};

export default SiteNavigation;
