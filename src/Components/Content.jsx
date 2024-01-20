import { Slider } from "@radix-ui/themes";
import { FaPlay } from "react-icons/fa6";
import { FaBackwardStep } from "react-icons/fa6";
import { FaStepForward } from "react-icons/fa";

export const Content = () => {
    return (
        <div className="px-4 py-16 mx-auto bg-fuchsia-200 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 ">
            <div className="max-w-xl text-center mb-6 sm:mx-auto sm:text-center md:mb-10 lg:max-w-xl">
                <p className="mb-1 text-xs font-semibold tracking-wide uppercase md:mb-2">
                    Music Player
                </p>
            </div>
            <div className="grid gap-6 row-gap-5 lg:grid-cols-1">
                <div>
                    <img
                        className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-40 xl:h-40"
                        src="https://images.pexels.com/photos/164853/pexels-photo-164853.jpeg?cs=srgb&dl=pexels-pixabay-164853.jpg&fm=jpg"
                        alt=""
                    />
                    <div className="flex flex-col justify-center items-center space-y-4 mt-6">
                    <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                        Song name
                    </h5>
                    <p className="text-gray-700">
                        artist
                    </p>
                    </div>
                    <Slider defaultValue={[25]} size="1" color="crimson"/>
                    <div className="flex justify-center space-x-4 mt-6">
                        <FaBackwardStep/>
                        <FaPlay/>
                        <FaStepForward/>
                    </div>
                </div>
            </div>
        </div>
    );
};