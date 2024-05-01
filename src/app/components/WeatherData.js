import { FaTemperatureFull, FaDroplet } from "react-icons/fa6";
import { MdOutlineVisibility } from "react-icons/md";
import { FaWind } from "react-icons/fa";

export default function WeatherData({weatherData}) {
    return (
        <div className="w-[359px] h-[328px] bg-[#FAFAFA] dark:bg-[#131A2B] p-3 rounded-xl flex justify-start items-center overflow-hidden">
            <div className="w-full h-full rounded-lg bg-cover flex flex-col justify-center">
                <div className="mx-5 text-[#131A2B] dark:text-gray-100 flex flex-col gap-3">
                    <div className="flex items-center">
                        <FaTemperatureFull className="text-3xl mr-2" />
                        <p className="font-bold">Feels Like:</p>
                        <p className="font-bold ml-auto">{weatherData.feels_like}℃</p>
                    </div>
                    <hr className="border-gray-600 my-2" />
                    <div className="flex items-center">
                        <FaDroplet className="text-3xl mr-2" />
                        <p className="font-bold">Humidity:</p>
                        <p className="font-bold ml-auto">{weatherData.humidity}%</p>
                    </div>
                    <hr className="border-gray-600 my-2" />
                    <div className="flex items-center">
                        <FaWind className="text-3xl mr-2" />
                        <p className="font-bold">Wind Speed:</p>
                        <p className="font-bold ml-auto">{weatherData.wind_speed}m/s</p>
                    </div>
                    <hr className="border-gray-600 my-2" />
                    <div className="flex items-center">
                        <MdOutlineVisibility className="text-3xl mr-2" />
                        <p className="font-bold">Visibility:</p>
                        <p className="font-bold ml-auto">{weatherData.visibility}km</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
