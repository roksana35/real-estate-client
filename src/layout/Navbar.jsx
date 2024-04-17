import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/Authprovider";

const Navbar = () => {
  const{logOut,user}=useContext( AuthContext);
  const handleLogout = ()=>{
    logOut();
  }
    return (
        <div className="navbar bg-base-100 sticky top-0 z-50 h-[76px]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><NavLink to='/' className={({isActive})=> isActive?'text-green-500 font-bold ':'font-bold '}>Home</NavLink></li>
              <li><NavLink to='/update' className={({isActive})=> isActive?'text-green-500 font-bold ':'font-bold '}>Update Profile</NavLink></li>
              {
                user&& <li><NavLink to='/user' className={({isActive})=> isActive?'text-green-500 font-bold ':'font-bold '}>User Profile</NavLink></li>
                
              }
              {/* // <li><NavLink to='/user' className={({isActive})=> isActive?'text-green-500 font-bold ':'font-bold '}>User Profile</NavLink></li> */}
              
            </ul>
          </div>
          
          <img className='w-[100px]  h-full overflow-hidden rounded-full mb-6 ' src="https://i.ibb.co/ZXZgK7M/1002449-OIMZ3-S0.jpg"></img>
          
          <a className="btn btn-ghost text-xl ">
          
            My Home</a>

          
         
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <li><NavLink to='/' className={({isActive})=> isActive?'text-green-500 font-bold ':'font-bold '}>Home</NavLink></li>
              <li><NavLink to='/update' className={({isActive})=> isActive?'text-green-500 font-bold ':'font-bold '}>Update Profile</NavLink></li>
              <li><NavLink to='/user' className={({isActive})=> isActive?'text-green-500 font-bold ':'font-bold '}>User Profile</NavLink></li>
          </ul>
        </div>
        <div className="navbar-end">
          {
            user? <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://i.ibb.co/7vhnSXx/christopher-campbell-r-DEOVt-E7v-Os-unsplash.jpg">
                  </img>
                </div>

              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

              </ul>
              {/* <li>
                <button className="btn btn-sm btn-ghost">Farhan</button>
              </li> */}
            
            <button onClick={handleLogout} className="btn bg-green-500 text-white">Sign Out </button>
            </div>
            :
            <Link to='/login'>
            <button className="btn bg-green-500 text-white">Login</button>
            </Link>

          }
          
          
        </div>
      </div>
    );
};

export default Navbar;