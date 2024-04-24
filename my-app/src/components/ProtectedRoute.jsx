import { Navigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext.jsx";

const ProtectedRoute = ({ children }) => {
  const { user } = useUserContext();
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
