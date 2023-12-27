import { useEffect, useState } from "react";
import useAxios from "./useAxios";

const useUser = () => {
  const [userAll, setUsrAll] = useState();
  const axiosSecure = useAxios();
  useEffect(() => {
    axiosSecure.get("/user").then((res) => setUsrAll(res.data));
  }, [axiosSecure]);
  return{userAll}
};

export default useUser;
