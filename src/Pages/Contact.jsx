import { useForm } from "react-hook-form";

const Contact = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
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
          <h1 className="text-2xl font-bold text-center text-white">Add Task</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <div className="md:flex gap-5 w-full">
              <div className="md:w-[50%] space-y-1 text-sm">
                <label htmlFor="title" className="block text-lg text-white">
                  Frist Name
                </label>
                <input
                  {...register("title", { required: true })}
                  type="text"
                  id="title"
                  placeholder="Frist Name"
                  className="w-full px-4 py-3 rounded-md    focus:"
                />
              </div>
              <div className="md:w-[50%] space-y-1 text-sm relative">
                <label htmlFor="current" className="block text-lg text-white">
                Least Name
                </label>
                <input
                  {...register("current", { required: true })}
                  type="text"
                  id="current"
                  placeholder="Current Data"
                  className="w-full px-4 py-3 rounded-md    focus:"
                />
              </div>
            </div>
            <div className="md:flex gap-5 w-full">
              <div className="md:w-[50%] space-y-1 text-sm">
                <label htmlFor="pricrity" className="block text-lg text-white">
                  Email
                </label>
                <input
                  {...register("current", { required: true })}
                  type="text"
                  id="current"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-md    focus:"
                />
              </div>
              <div className="md:w-[50%] space-y-1 text-sm relative">
                <label htmlFor="deadline" className="block text-lg text-white">
                  Numbar
                </label>
                <input
                  {...register("deadline", { required: true })}
                  type="date"
                  id="deadline"
                  placeholder="numbar"
                  className="w-full px-4 py-3 rounded-md    focus:"
                />
              </div>
            </div>
            <div className=" space-y-1 text-sm relative">
              <label htmlFor="discription" className="block text-lg text-white">
                Message
              </label>
              <textarea
                cols="15"
                rows="5"
                {...register("discription", { required: true })}
                type="text"
                id="discription"
                placeholder="Message"
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

export default Contact;