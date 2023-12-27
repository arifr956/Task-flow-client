import { Link } from "react-router-dom";
import Auth from "./Auth/Auth";
import { GiHamburgerMenu } from "react-icons/gi";
const Navber = () => {
  const { user, logOut } = Auth();
  return (
    <div
      className={`border-b border-[#3D8AD0] bg-gradient-to-r from-[#07163d] to-[#3D8AD0] shadow sticky top-0 left-0 z-30`}
    >
      <div className="flex items-center justify-between lg:py-3 text-white md:w-11/12 mx-auto">
        <div className="py-2  flex justify-between items-center w-[90%] lg:w-[30%]  mx-auto flex-row-reverse lg:flex-row">
          <div className="block lg:hidden ">
            <div className="drawer drawer-end">
              <input
                id="my-drawer-4"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">
                <label htmlFor="my-drawer-4" className="drawer-button text-2xl">
                  <GiHamburgerMenu />
                </label>
              </div>
              <div className="drawer-side mt-10">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu p-4 w-[100%] md:w-[60%] flex-col gap-2 min-h-full bg-gradient-to-l from-[#07163d] to-[#3D8AD0] text-white text-sm">
                  {user ? (
                    <>
                      <div className="flex gap-5 items-center justify-center">
                        <div className=" border border-[#01040a] rounded-[50%] w-[40px] h-[40px]">
                          <img
                            src={user.photoURL}
                            title={user.email}
                            className="w-full h-full rounded-[50%]"
                          />
                        </div>
                        <h1 className="text-xl text-medium text-white">
                          {user.displayName}
                        </h1>
                      </div>
                      <Link to="/">Home</Link>
                      <Link to="/contact">Contact Us</Link>
                      <button
                        onClick={logOut}
                        className="py-1 px-5 bg-[#07163d] hover:bg-[#01040a] rounded"
                      >
                        Log Out
                      </button>
                    </>
                  ) : (
                    <>
                      <Link to="/">Home</Link>
                      <Link to="/contact">Contact Us</Link>
                      <Link
                        to="/login"
                        className="py-1 px-5 bg-[#07163d] text-center hover:bg-[#01040a] rounded"
                      >
                        Log In
                      </Link>
                      <Link
                        to="/signUp"
                        className="py-1 px-5 bg-[#07163d] text-center hover:bg-[#01040a] rounded"
                      >
                        Sign Up
                      </Link>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="currentColor"
              className="flex-shrink-0 w-5 h-5 rounded-full "
            >
              <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
            </svg>
            <h1 className="text-xl font-medium tracking-[3px]">
              Priority Pulse
            </h1>
          </div>
        </div>
        <div className="hidden lg:flex w-[70%]">
          <ul className="w-full flex gap-3 items-center justify-end text-lg">
            <Link to="/">Home</Link>
            <Link to="/contact">Contack Us</Link>
            {user ? (
              <>
                <div className=" border border-[#01040a] rounded-[50%] w-[40px] h-[40px]">
                  <img
                    src={user.photoURL}
                    title={user.email}
                    className="w-full h-full rounded-[50%]"
                  />
                </div>
                <button
                  onClick={logOut}
                  className="py-1 px-5 bg-[#07163d] hover:bg-[#01040a] rounded"
                >
                  Log Out
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="py-1 px-5 bg-[#07163d] hover:bg-[#01040a] rounded"
                >
                  Log In
                </Link>
                <Link
                  to="/signUp"
                  className="py-1 px-5 bg-[#07163d] hover:bg-[#01040a] rounded"
                >
                  Sign Up
                </Link>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navber;
