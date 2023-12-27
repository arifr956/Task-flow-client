import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://task-management-server-teal.vercel.app",
});
const useAxios = () => {
  return axiosSecure;
};

export default useAxios;
