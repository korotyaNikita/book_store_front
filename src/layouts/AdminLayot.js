import { Navigate, Outlet } from "react-router-dom";
import useAuthContext from "../context/Auth/AuthContext";

const AdminLayout = () => {
    const { user } = useAuthContext()
    return user && user.role_id === 2 ? <Outlet /> : <Navigate to="/" />
};

export default AdminLayout;
