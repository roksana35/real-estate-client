import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Route = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="  lg:w-[1024px]">
            <Outlet></Outlet>
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default Route;