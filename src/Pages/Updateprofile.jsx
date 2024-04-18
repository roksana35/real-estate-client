import { useContext, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../provider/Authprovider";
import firebase from "firebase/compat/app";
import { ToastContainer, toast } from "react-toastify";



const Updateprofile = () => {
    // const {loading}=useContext(AuthContext)
    const {user,updateUserProfile}=useContext(AuthContext);
    console.log(user)
    const nameref=useRef('');
    const [name,setName]=useState('');
    const [PhotoURL,setPhotoURL]=useState('')
    console.log(nameref)


    const handleSubmit=e=>{
        e.preventDefault()
        updateUserProfile(name,PhotoURL)
        .then(()=>{
            toast.success('Profile update successfully')
        })
        .catch(error=>{
            toast.error('error updating profile')
        })
    }
    const handlePhotoURLChange=e=>{
        setPhotoURL(e.target.value)
    }
    const handleNameChange=e=>{
        console.log(e.target.value)
        setName(e.target.value)
        
        // updateUserProfile(name,PhotoURL)
        // .then(()=>{
        //     toast.success('Profile update successfully')
        // })
        // .catch(error=>{
        //     toast.error('error updating profile')
        // })
    }
    return (
        <div className="min-h-screen">
            <Helmet>
                <title>
                    Update Profile
                </title>
            </Helmet>
            <div className=" mx-auto space-y-2">
            <h1 className='text-2xl text-center font-bold'>update profile</h1>
            <form className="mx-auto space-y-2 " onSubmit={handleSubmit}>
                <input className="input lg:ml-72 input-bordered w-full lg:max-w-xl"  type="text" placeholder="Enter your photoURL "  onChange={handlePhotoURLChange} value={PhotoURL} />
                <br />
                <input className="input lg:ml-72 input-bordered w-full lg:max-w-xl"  type="text"  placeholder="enter your name" value={name} onChange={handleNameChange} />
                <br />
                <input className="input lg:ml-72 input-bordered w-full lg:max-w-xl" type="email"  placeholder="enter your email" value={user.email} />
                <br />
                
                <input className="btn lg:ml-72 btn-primary w-full lg:max-w-xl " type="submit" value="save change" />
            </form>
            <ToastContainer></ToastContainer>
        </div>

            </div>
            
    );
};

export default Updateprofile;