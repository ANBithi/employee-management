import { Navigate, Outlet } from "react-router-dom";
import loginService from "../services/login.service";
const ProtectedRoutes = () => {
    let auth = loginService.getLogingStatus();
    return(
        auth ? <Outlet/> : <Navigate to = "/login"/>
    )
}
export default ProtectedRoutes;