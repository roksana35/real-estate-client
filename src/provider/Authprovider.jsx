import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider,signInWithPopup,GithubAuthProvider, onAuthStateChanged,signOut,updateProfile} from "firebase/auth";
import auth from "../firebase.config";
 export const AuthContext=createContext(null);
 const googleProvider= new GoogleAuthProvider();
 const githubProvider = new GithubAuthProvider();

const Authprovider = ({children}) => {
    const [user,setUser]=useState(null);
    
    

    
    const googleLogin=()=>{
        return signInWithPopup(auth,googleProvider)
    }

    const githubLogin=()=>{
        return signInWithPopup(auth,githubProvider)
    }
    const logOut=()=>{
        return signOut(auth)
    }



    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
         
    }
    const signInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth, (currentuser) => {
            console.log(currentuser)
            
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              setUser(currentuser)
              // ...
            
          });
          return ()=>{
            unSubscribe();
          }
    },[])

    const authInfo={
        
        createUser,
         signInUser,
         googleLogin,
         githubLogin,
         logOut,
         user,

         
         

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;