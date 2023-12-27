import { Link, Outlet } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserTie,FaHome,FaUserFriends   } from "react-icons/fa";
import { HiViewGridAdd } from "react-icons/hi";
import { PiDownloadDuotone } from "react-icons/pi";
import Auth from "../Shere/Auth/Auth";
const Dashboard = () => {
    const {user} = Auth()
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <label
          htmlFor="my-drawer-2"
          className="drawer-button lg:hidden text-end bg-gradient-to-r from-[#07163d] to-[#3D8AD0]"
        >
         <div className="flex justify-end w-full">
         <span className="mt-1 me-2 text-3xl">
         <GiHamburgerMenu/>
         </span>
         </div>
        </label>
        <div>
            <Outlet/>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-[80%] md:w-80 min-h-full bg-gradient-to-r from-[#07163d] to-[#3D8AD0] text-white">
          {/* Sidebar content here */}

          <div className="flex items-center justify-center space-x-2 my-5">
          <img
            src={user?.photoURL}
            alt=""
            className="object-cover object-center w-16 h-16 rounded-full shadow-sm  "
          />
          <div className="-space-y-1">
            <h2 className="text-lg font-semibold leadi">{user?.displayName}</h2>

          </div>
        </div>

            <Link to='/dashboard/profile' className="hover:bg-white flex items-center gap-2 hover:text-black text-lg rounded mb-1 font-normal px-4 py-1"><FaUserTie/> Profile</Link>
            <Link to='/dashboard/addtask' className="hover:bg-white flex items-center gap-2 hover:text-black text-lg rounded mb-1 font-normal px-4 py-1"><HiViewGridAdd/> Add Task</Link>
            <Link to="/dashboard/alltask" className="hover:bg-white flex items-center gap-2 hover:text-black text-lg rounded mb-1 font-normal px-4 py-1"><PiDownloadDuotone/> Previous Tasks</Link>
            <Link to='/dashboard/users' className="hover:bg-white flex items-center gap-2 hover:text-black text-lg rounded mb-1 font-normal px-4 py-1"><FaUserFriends/> All User</Link>
            <Link className="hover:bg-white hover:text-black text-lg rounded mb-1 font-normal px-4 py-1">Completed</Link>
            <div className="p-[1px] my-3 bg-white"></div> 
            <Link to="/" className="hover:bg-white flex items-center gap-2 hover:text-black text-lg rounded mb-1 font-normal px-4 py-1"><FaHome/> Home</Link>
            <Link className="hover:bg-white hover:text-black text-lg rounded mb-1 font-normal px-4 py-1">Add Task</Link>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
