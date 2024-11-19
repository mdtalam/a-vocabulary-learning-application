import { Outlet } from "react-router-dom";
import Header from "../Component/Header";


const AuthLayOut = () => {
    return (
        <div className="container mx-auto">
            <header>
                <Header></Header>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayOut;