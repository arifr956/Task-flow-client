const Featcher = () => {
  return (
    <section className=" md:w-9/12 mx-auto">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src="https://img.freepik.com/free-photo/entrepreneurs-meeting-office_23-2148898688.jpg?size=626&ext=jpg&uid=R116477275&ga=GA1.1.1339526423.1701975357&semt=ais"
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold text-black leadi sm:text-2xl">
            Elevate Productivity
            <br />with Seamless Task Management
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            our one-stop solution for efficient task coordination across teams
            and individuals. Elevate productivity with intuitive tools and
            seamless collaboration.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold rounded border border-[#3D8AD0] hover:bg-[#3D8AD0] hover:text-white "
            >
              Suspendisse
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold rounded border border-[#07163d] hover:bg-[#07163d] hover:text-white "
            >
              Malesuada
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featcher;
