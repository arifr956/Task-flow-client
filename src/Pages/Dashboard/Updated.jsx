import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import useAxios from "../../Shere/Hoot/useAxios";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const Updated = () => {
  const axiosSecure = useAxios();
  const [loaderData, setLoaderData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axiosSecure.get(`/alltask/single/${id}`).then((result) => {
      setLoaderData(result.data);
    });
  }, [axiosSecure, id]);
  console.log(loaderData);
  const { _id, current_date, deadline, discription, priority, title } =
    loaderData;
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const updatedHendel = (data) => {
    const updated = {
      current_date: data.current_date || current_date,
      deadline: data.deadline || deadline,
      discription: data.discription || discription,
      priority: data.priority || priority,
      title: data.title || title,
    };
    if (_id) {
      axiosSecure.put(`/alltask/updated?id=${_id}`, updated).then((res) => {
        if (res.data?.modifiedCount > 0) {
          reset();
          navigate("/dashboard/alltask");
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
    }
  };
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
      <div className="flex items-center justify-center lg:h-[100vh]">
        <div className="w-full max-w-3xl p-8 space-y-3 rounded-xl bg-gradient-to-l from-[#07163d] to-[#3D8AD0] ">
          <h1 className="text-2xl font-bold text-center text-white">
            Updated Task
          </h1>
          <form onSubmit={handleSubmit(updatedHendel)} className="space-y-3">
            <div className="md:flex gap-5 w-full">
              <div className="md:w-[50%] space-y-1 text-sm">
                <label htmlFor="title" className="block text-lg text-white">
                  Task Title
                </label>
                <input
                  {...register("title")}
                  type="text"
                  id="title"
                  placeholder="Task Title"
                  defaultValue={title}
                  className="w-full px-4 py-3 rounded-md    focus:"
                />
              </div>
              <div className="md:w-[50%] space-y-1 text-sm relative">
                <label htmlFor="current" className="block text-lg text-white">
                  Current Data
                </label>
                <input
                  {...register("current")}
                  type="date"
                  id="current"
                  placeholder="Current Data"
                  defaultValue={current_date}
                  className="w-full px-4 py-3 rounded-md    focus:"
                />
              </div>
            </div>
            <div className="md:flex gap-5 w-full">
              <div className="md:w-[50%] space-y-1 text-sm">
                <label htmlFor="pricrity" className="block text-lg text-white">
                  Priority
                </label>
                <select
                  {...register("pricrity")}
                  id="pricrity"
                  defaultValue={priority}
                  className="w-full px-4 py-3 rounded-md    focus:"
                >
                  <option>Select Task Priority</option>
                  <option value="Low">Low</option>
                  <option value="Moderate">Moderate</option>
                  <option value="High">High</option>
                </select>
              </div>
              <div className="md:w-[50%] space-y-1 text-sm relative">
                <label htmlFor="deadline" className="block text-lg text-white">
                  Deatline
                </label>
                <input
                  {...register("deadline")}
                  type="date"
                  id="deadline"
                  defaultValue={deadline}
                  placeholder="Deadline"
                  className="w-full px-4 py-3 rounded-md    focus:"
                />
              </div>
            </div>
            <div className=" space-y-1 text-sm relative">
              <label htmlFor="discription" className="block text-lg text-white">
                Task Discription
              </label>
              <textarea
                cols="15"
                rows="5"
                {...register("discription")}
                type="text"
                id="discription"
                defaultValue={discription}
                placeholder="Task Discription"
                className="w-full px-4 py-3 rounded-md    focus:"
              />
            </div>
            <input
              type="submit"
              className="block w-full p-2 text-center bg-[#06213a] hover:bg-[#07163d] text-white rounded "
            />
          </form>
        </div>
      </div>
    </div>
  );
};
export default Updated;
