import { Outlet, Navigate } from "react-router-dom";
const PublicRoutes: React.FC = () => {
    const user = null;
    return !user ? <Outlet /> : <Navigate to="/" />;
};

export default PublicRoutes;
