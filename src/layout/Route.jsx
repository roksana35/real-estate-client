import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Route = () => {
    return (
        <div className="lg:min-w-[1024px]">
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-144px)] p-1 lg:p-3">
            <Outlet></Outlet>
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default Route;