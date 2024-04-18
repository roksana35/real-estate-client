


import { useContext, useState } from "react";
import { AuthContext } from "../provider/Authprovider";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";
import { FaEyeSlash } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
// import {updateProfile} from 'firebase/auth'
// import auth from "../firebase.config";

// import { toast ,ToastContainer} from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';



const Register = () => {
        
        const {createUser,setUser,user,updateUserProfile}=useContext(AuthContext);
        const [error,seterror]=useState('');
        const [error2,seterror2]=useState('');
        const [success,setSuccess]=useState('');
        const [showpassword,setShowpassword]=useState(false);
        const navigate =useNavigate();
        const from='/';
        

    const handleSignUp=(e)=>{
      
        e.preventDefault();
        const name=e.target.name.value;
    const email=e.target.email.value;
    const password =e.target.password.value;
    const image = e.target.image.value;
    seterror('');
    seterror2('');
    setSuccess('');
    
    
    if(password.length<6){
      seterror('password should be at least 6 characters')
      return;
    }
    if(!/[A-Z]/.test(password)){
      seterror('your password should have one uppercase')
      return;
      }
      if(!/[a-z]/.test(password)){
        seterror('your password should have one lowercase')
        return;
      }
      

    console.log(name,email,password,image);
    createUser(email,password)
    .then(result=>{
      updateUserProfile(name,image)
      .then(()=>{
        navigate(from)

      })
    
      console.log(result.user);
      // toast.success('user create successfully')
      
      
      
      setSuccess('user create successfully')
    })
    .catch(error=>{
      console.error(error);
      seterror2(error.message)
    })

    }
    


    return (
      <div>
        <Helmet>
          <title>Register Page</title>
        </Helmet>
        <Navbar></Navbar>


        <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className=" text-3xl lg:text-5xl font-bold">Register now!</h1>
            
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image url</span>
                </label>
                <input type="text" name="image" placeholder="image url" className="input input-bordered"  />
              </div>
              
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input 
                type={showpassword?"text":"password"}
                 name="password" placeholder="password" className="input input-bordered" required />
                <span className="absolute mt-14 ml-48 lg:ml-56" onClick={()=>setShowpassword(!showpassword)}>
                  {
                    showpassword?<IoMdEye />:<FaEyeSlash />
                  }
                </span>
                <p className="text-red-700">{error}</p>
                
              </div>
              
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              {
              error2&&<p className="text-red-600  font-semibold">{error2}</p>
            }
            {
              success&&<p className="text-green-600 font-semibold">{success}</p>
            }

              <div><h1>Already have a account?<Link to="/login"><span className="text-primary font-semibold ml-2" >LogIn</span></Link></h1></div>
             
              
            </form>
            {/* <ToastContainer></ToastContainer> */}
            
          </div>
        </div>
      </div>

      
      <Footer></Footer>





      </div>
        
    );
};

export default Register; 