import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

const PublicRoutes: React.FC = () => {
    const { isAuthenticated } = useAuth();
    return !isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default PublicRoutes;
