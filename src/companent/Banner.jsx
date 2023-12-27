import Button from "./Button";

const Banner = () => {
    return (
        <div className="md:h-[60vh]" style={{backgroundImage: 'url(https://t4.ftcdn.net/jpg/06/68/46/81/240_F_668468137_4jb8nxlFZemZkc9B6ifJVqPQkyO2oTgo.jpg)', backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
            <div className="flex justify-center flex-col items-center h-full text-white bg-black/60 py-5">
                <h1 className="text-xl md:text-3xl lg:text-4xl font-medium">Optimize Task Management</h1>
                <p className="w-11/12 md:w-7/12 mx-auto text-lg md:text-xl text-center py-5">Streamline tasks effectively with Priority Pulse. Organize, prioritize, and collaborate seamlessly for enhanced productivity and goal achievement. Simplify your workflow effortlessly.</p>
                <Button/>
            </div>
        </div>
    );
};

export default Banner;