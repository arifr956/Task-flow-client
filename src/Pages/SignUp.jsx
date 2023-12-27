import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import Auth from "../Shere/Auth/Auth";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import useAxios from "../Shere/Hoot/useAxios";
const SignUp = () => {
  const [open, setOpen] = useState(true);
  const { createUser, logOut,googleUser } = Auth();
  const navigate = useNavigate();
  const location = useLocation()
  const axiosSecure = useAxios();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const name = data.name;
    const photo = data.photo;
    const email = data.email;
    const password = data.password;
    createUser(email, password).then((result) => {
      updateProfile(result.user, {
        displayName: name,
        photoURL: photo,
      }).then((result) => {
        const userInfo = { name, email, photo };
        axiosSecure.post("/user", userInfo).then((result) => {
            logOut();
          if (result) {
            navigate("/login");
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Successfull Create User",
              showConfirmButton: false,
              background: "#07163d",
              color: "white",
              timer: 2000,
            });
          }
        });
      });
    });
    reset();
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
            navigate(location?.state ? location?.state : "/");
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
      }
    });
  };
  return (
    <div className="flex items-center justify-center h-[90vh]">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-base-200 ">
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div className="space-y-1 text-sm">
            <label htmlFor="name" className="block ">
              User Name
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              id="name"
              placeholder="User Name"
              className="w-full px-4 py-3 rounded-md    focus:"
            />
          </div>
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
          <div className="space-y-1 text-sm">
            <label htmlFor="photo" className="block ">
              Photo Url
            </label>
            <input
              {...register("photo", { required: true })}
              type="url"
              id="photo"
              placeholder="Photo Url"
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
          <button onClick={googleLogin} aria-label="Log in with Google" className="p-3 rounded-sm">
            <FcGoogle />
          </button>
          <button aria-label="Log in with GitHub" className="p-3 rounded-sm">
            <FaGithub />
          </button>
        </div>
        <p className="text-lg text-center sm:px-6 ">
          Alredi have an account?{" "}
          <Link to="/login" className="underline ">
            Loi In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
