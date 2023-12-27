import { Link } from "react-router-dom";
import "./Button.css";
import Auth from "../Shere/Auth/Auth";
const Button = () => {
  const {user} = Auth()
  return <Link to={`${user? '/dashboard/profile':'/login'}`}>
    <button className="dashbord tracking-[2px]">Let’s Explore</button>
  </Link>;
};

export default Button;
