import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider,signInWithPopup,GithubAuthProvider, onAuthStateChanged,signOut} from "firebase/auth";
import auth from "../firebase.config";
 export const AuthContext=createContext(null);
 const googleProvider= new GoogleAuthProvider();
 const githubProvider = new GithubAuthProvider();

const Authprovider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setloading]=useState(true);
    
    

    
    const googleLogin=()=>{
        setloading(true);
        return signInWithPopup(auth,googleProvider)
    }

    const githubLogin=()=>{
        setloading(true);

        return signInWithPopup(auth,githubProvider)
    }
    const logOut=()=>{
        return signOut(auth)
    }



    const createUser=(email,password)=>{
        setloading(true);
        return createUserWithEmailAndPassword(auth,email,password)
         
    }
    const signInUser=(email,password)=>{
        setloading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth, (currentuser) => {
            console.log(currentuser)
            
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              setUser(currentuser);
              setloading(false)
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
         loading

         
         

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;