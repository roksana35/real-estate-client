import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
    const [infocick,setInfoclick]=useState(false);
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [number,setNamber]=useState('');
    const [massage,setMassage]=useState('');
    

    const hanldeInfo=()=>{
        if(name && email&&number){
            toast.success("Info send successfully");
            setName('');
            setEmail('');
            setNamber('');
            setMassage('');
            
         }
         else{
            toast.warning("Please fill in all required fields");
         }
        }
    return (
        <div>
            <Helmet>
                <title>Contact Page</title>
            </Helmet>

<div className="text-center p-2 lg:p-4 mt-3 lg:mt-8 lg:space-y-6">
            <h1 className="text-2xl text-black font-semibold"> Reach Out</h1>
            <h2 className="text-xl text-black font-medium">if you would like to contact us fill up the form below</h2>
            <div className="space-y-3 shadow-lg p-1 mt-4 lg:p-6 lg:w-[700px] mx-auto text-center rounded-lg">
                <h2 className="text-start ml-[75px] text-xl">What are your details?</h2>
            <input onChange={(e)=>setName(e.target.value)} className="p-2 w-full lg:w-[500px] rounded-lg border border-gray-400 text-gray-400" type="text" name="name" placeholder="Your Name" value={name} required/>
            <br />
            <input onChange={(e)=>setEmail(e.target.value)} className="p-2 w-full lg:w-[240px] rounded-lg border border-gray-400 text-gray-400" type="email" name="email" placeholder="Your Email Address" value={email} required />
            <input onChange={(e)=>setNamber(e.target.value)} className="p-2 w-full lg:w-[240px] rounded-lg border border-gray-400 lg:ml-3 text-gray-400" type="number" name="number" placeholder="Your Number" value={number} required />
            <h2 className="text-start ml-[75px] text-xl">What would you like to say? </h2>
            <textarea onChange={(e)=>setMassage(e.target.checked)} className="p-3 border border-gray-400 text-gray-400 w-full lg:w-[500px] rounded-lg textarea-success" placeholder="Your massage" value={massage}></textarea>
            <br />
            <input onClick={hanldeInfo} className="p-2 bg-emerald-400 text-white font-bold text-xl rounded-lg " type="submit" value="Send Info" />
            </div>
            <ToastContainer></ToastContainer>
        </div>

        </div>
        
    );
};

export default Contact;