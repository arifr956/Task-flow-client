import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import Auth from "../Shere/Auth/Auth";
import Swal from "sweetalert2";
import useAxios from "../Shere/Hoot/useAxios";
const LogIn = () => {
  const [open, setOpen] = useState(true);
  const { loginUser, googleUser } = Auth();
  const axiosSecure = useAxios();
  const location = useLocation();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    loginUser(data.email, data.password).then((result) => {
      reset();
      if (result.user) {
        navigate(location.state?.from || "/");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfull Login User",
          showConfirmButton: false,
          background: "#07163d",
          color: "white",
          timer: 2000,
        });
      }
    });
  };
  const googleLogin = () => {
    googleUser().then((result) => {
      if (result?.user) {
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
          photo: result.user?.photoURL,
        };
        axiosSecure.post("/user", userInfo).then((res) => {
          if (res.data.insertedId) {
            navigate(location.state?.from || "/");
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Successfull Google Login",
              showConfirmButton: false,
              background: "#07163d",
              color: "white",
              timer: 2000,
            });
          }
        });
        navigate(location.state?.from || "/");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfull Google Login",
          showConfirmButton: false,
          background: "#07163d",
          color: "white",
          timer: 2000,
        });
      }
    });
  };
  return (
    <div className="flex items-center justify-center h-[90vh]">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-base-200 ">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block ">
              Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              id="username"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md    focus:"
            />
          </div>
          <div className="space-y-1 text-sm relative">
            <label htmlFor="password" className="block ">
              Password
            </label>
            <input
              {...register("password", { required: true })}
              type={open ? "password" : "text"}
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md    focus:"
            />

            <span
              onClick={() => setOpen(!open)}
              className="absolute right-3 top-[45%] text-2xl "
            >
              {open ? <FaRegEye /> : <FaRegEyeSlash />}
            </span>
          </div>
          <input
            type="submit"
            className="block w-full p-2 my-4 text-center bg-[#06213a] hover:bg-[#07163d] text-white rounded "
          />
        </form>
        <div className="flex items-center space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-black"></div>
          <p className="px-3 text-lg ">Login with social accounts</p>
          <div className="flex-1 h-px sm:w-16 bg-black"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={googleLogin}
            aria-label="Log in with Google"
            className="p-3 rounded-sm"
          >
            <FcGoogle />
          </button>
          <button aria-label="Log in with GitHub" className="p-3 rounded-sm">
            <FaGithub />
          </button>
        </div>
        <p className="text-lg text-center sm:px-6 ">
          Don't have an account?{" "}
          <Link to="/signUp" className="underline ">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
