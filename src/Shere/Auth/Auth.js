import { useContext } from "react";
import { AuthCreate } from "./AuthContext";

const Auth = () => {
    const authInfo = useContext(AuthCreate);
    return authInfo;
};

export default Auth;