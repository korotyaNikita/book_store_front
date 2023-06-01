import { Navigate, Outlet } from "react-router-dom";
import useAuthContext from "../context/Auth/AuthContext";


const AuthLayot = () => {
    const { user } = useAuthContext()
    return user ? <Outlet /> : <Navigate to="/login" />
};

export default AuthLayot;