import Auth from "../../Shere/Auth/Auth";
import { FaGithub,FaTwitter,FaGoogle  } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
const Profile = () => {
    const {user} = Auth()
  return (
    <div
      className="w-full bg-scroll h-screen"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/22/brick-wall.JPG?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" w-full h-full flex items-center justify-center">
        <div className="bg-gradient-to-l from-[#07163d] to-[#3D8AD0] flex flex-col justify-center max-w-xl p-6 shadow-md rounded-xl sm:px-12 ">
          <img
            src={user?.photoURL}
            alt=""
            className="w-32 h-32 mx-auto rounded-full  aspect-square"
          />
          <div className="space-y-4 text-center divide-y ">
            <div className="my-2 space-y-1 text-white">
              <h2 className="text-xl font-semibold sm:text-2xl">
                {user?.displayName}
              </h2>
              <p className="px-5 text-xs sm:text-base ">{user?.email}</p>
            </div>
            <div className="flex justify-center pt-2 space-x-4 align-center text-white tex-3xl">
              <FaGoogle/>
              <FaTwitter/>
              <FaGithub/>
              <BiWorld/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
