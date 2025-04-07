import { Outlet, Navigate } from "react-router-dom";
const ProtectedRoutes: React.FC = () => {
    const user = null
    return user ? <Outlet/> : <Navigate to="/login"/>
}
export default ProtectedRoutes