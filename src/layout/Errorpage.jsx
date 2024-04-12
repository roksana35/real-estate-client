import { Link } from "react-router-dom";


const Errorpage = () => {
    return (
        <div className="lg:w-1/2 mx-auto lg:space-y-5 lg:mt-20 ">
            <h1 className="text-2xl font-bold">404</h1>
            <h2 className="text-2xl font-bold ">This Page is Not Found</h2>
            <Link to='/'><button className=" text-white font-semibold bg-green-500 p-3 rounded-lg mt-5">Go Back Home</button></Link>
        </div>
    );
};

export default Errorpage;