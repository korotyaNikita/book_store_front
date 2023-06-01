import { Navigate, Outlet } from "react-router-dom";
import useAuthContext from "../context/Auth/AuthContext";


const GuestLayout = () => {
    const { user } = useAuthContext()
    return !user ? <Outlet /> : <Navigate to="/" />
};

export default GuestLayout;
