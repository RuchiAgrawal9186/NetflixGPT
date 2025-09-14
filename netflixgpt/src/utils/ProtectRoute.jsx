import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./authContext";


const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <p className="text-white">Loading...</p>;

  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
