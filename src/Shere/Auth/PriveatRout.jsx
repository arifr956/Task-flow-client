import { Navigate, useLocation } from "react-router-dom";
import Auth from "./Auth";
const PriveatRout = ({ children }) => {
  const { user, loading } = Auth();
  const location = useLocation();
  if (user) {
    return children;
  }
  if (loading) {
    return (
      <div className="w-full h-[90vh]">
        <span className="loading loading-infinity loading-[100px]"></span>
      </div>
    );
  }
  return <Navigate state={location.pathname} to="/login" />;
};

export default PriveatRout;
