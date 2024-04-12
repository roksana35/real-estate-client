import { createContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import auth from "../firebase.config";
 export const AuthContext=createContext(null);

const Authprovider = ({children}) => {

    const googleProvider=new GoogleAuthProvider();
    const googleLogin=()=>{
        return signInWithPopup(auth,googleProvider)
    }
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const authInfo={
        createUser,
         signInUser,
         googleLogin

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;