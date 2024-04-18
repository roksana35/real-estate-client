import { useContext, useState } from "react";
import { AuthContext } from "../provider/Authprovider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { Helmet } from "react-helmet-async";


const Loginpage = () => {
  const [success,setSuccess]=useState('');
  const [error,seterror]=useState('');
  const [error2,seterror2]=useState('');
  const {signInUser,googleLogin,githubLogin}=useContext(AuthContext);
  const location=useLocation();
  const navigate= useNavigate()
  const handleLogin=(e)=>{
    e.preventDefault();
    const email=e.target.email.value;
    const password =e.target.password.value;
    console.log(email,password)
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

    signInUser(email,password)
    .then(result=>{
      console.log(result.user);
      navigate(location?.state?location.state:"/")
      setSuccess('user login successfully')
    })
    .catch(error=>{
      console.error(error);
      seterror2(error.message)

    })
    
  }
  // const handleGoogleLogIn=()=>{
  //     googleLogIn()
  //     .then(result=>{
  //       console.log(result.user)
  //     })
  //     .catch(error=>{
  //       console.error(error)
  //     })
  // }
 
    return (
      <div>
        <Helmet>
          <title>Login Page</title>
        </Helmet>
        <Navbar></Navbar>
        

        <div className="hero min-h-screen bg-base-200 ">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Login now!</h1>
      
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          {
            error&&<p className="text-red-600 font-medium">{error}</p>
          }
          
        </div>
        <div>
          New here?Create a account <Link to='/register'><button className="text-blue-700 font-semibold">Register</button></Link>

        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
          
        </div>
        {
              error2&&<p className="text-red-600  font-semibold">{error2}</p>
            }
        {
          success&&<p className=" text-green-600 font-semibold ">{success}</p>
        }
      </form>
      <div className="p-2 mx-auto">
      <button onClick={()=>googleLogin()} className="btn btn-outline border-purple-900 border-2 ">Continue with Google</button>

      </div>
      <div className="p-2 mx-auto ">
      <button onClick={()=>githubLogin()} className="btn btn-outline border-purple-900 border-2 ">Continue with Github</button>

      </div>
     
    </div>
  </div>
</div> 
<Footer></Footer>

      </div>
        
    );
};

export default Loginpage;