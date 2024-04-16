import { useContext, useState } from "react";
import { AuthContext } from "../provider/Authprovider";
import { Link } from "react-router-dom";



const Register = () => {
        
        const {createUser}=useContext(AuthContext);
        const [error,seterror]=useState('');
        const [error2,seterror2]=useState('');
        const [success,setSuccess]=useState('');
        

    const handleSignUp=(e)=>{
      
        e.preventDefault();
        const name=e.target.name.value;
    const email=e.target.email.value;
    const password =e.target.password.value;
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
      

    console.log(name,email,password);
    createUser(email,password)
    .then(result=>{
      console.log(result.user);
      
      setSuccess('user create successfully')
    })
    .catch(error=>{
      console.error(error);
      seterror2(error.message)
    })

    }
    


    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Register now!</h1>
            
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
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
            
          </div>
        </div>
      </div>
    );
};

export default Register;