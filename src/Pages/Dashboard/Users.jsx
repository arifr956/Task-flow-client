import useUser from "../../Shere/Hoot/useUser";
import SignelUser from "../../companent/SignelUser";

const Users = () => {
  const { userAll } = useUser();
  console.log(userAll);
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
      <div className=" bg-black/60 h-full flex flex-cels items-center justify-center">
        <div>
          <h1 className="text-4xl font-bold text-center text-white">
            All Users Calection
          </h1>
          <div className="w-10/12 mx-auto overflow-x-auto border-x-2 mt-5 md:mt-10  rounded-t-[30px]">
            <table className="table">
              <thead>
                <tr className="w-full bg-gradient-to-l from-[#07163d] to-[#3D8AD0] text-white ">
                  <th></th>
                  <th className="text-xl">Photo</th>
                  <th className="text-xl">Name</th>
                  <th className="text-xl">Email</th>
                </tr>
              </thead>
              <tbody>
                {userAll?.map((userAll, i) => (
                  <SignelUser key={i} userSingel={userAll} i={i} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
