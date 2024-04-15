import { useContext } from "react";
import { AuthContext } from "../provider/Authprovider";
import { Link } from "react-router-dom";


const Loginpage = () => {
  const {signInUser,googleLogin,githubLogin}=useContext(AuthContext);
  const handleLogin=(e)=>{
    e.preventDefault();
    const email=e.target.email.value;
    const password =e.target.password.value;
    console.log(email,password)
    signInUser(email,password)
    .then(result=>{
      console.log(result.user)
    })
    .catch(error=>{
      console.error(error)
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
        <div className="hero min-h-screen bg-base-200">
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
          
        </div>
        <div>
          New here?Create a account <Link to='/register'><button className="text-blue-700 font-semibold">Register</button></Link>

        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
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
    );
};

export default Loginpage;