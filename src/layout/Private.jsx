import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/Authprovider";


const Private = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation()
    if(loading){
        return <span className="loading loading-dots loading-md"></span>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default Private;