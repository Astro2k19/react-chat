import {Navbar} from "./Navbar";
import {Outlet} from "react-router-dom";

export const Root = () => {
    return <div>
        <Navbar />
        <Outlet />
    </div>
}