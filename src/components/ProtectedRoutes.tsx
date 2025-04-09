import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

const ProtectedRoutes: React.FC = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
export default ProtectedRoutes;
