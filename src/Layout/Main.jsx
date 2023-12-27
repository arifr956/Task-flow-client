import { Outlet } from "react-router-dom";
import Navber from "../Shere/Navber";
import Fotter from "../companent/Fotter";


const Main = () => {
    return (
        <div>
            <Navber/>
            <Outlet/>
            <Fotter/>
        </div>
    );
};

export default Main;