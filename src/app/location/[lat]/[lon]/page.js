"use client";
import { useEffect, useState } from "react";
import Logo from "@/app/components/Logo";
import ChartDetails from "@/app/components/ChartDetails";
import SearchBar from "@/app/components/SearchBar";
import { FaWind  } from "react-icons/fa";
import { MdOutlineVisibility } from "react-icons/md";
import { FaTemperatureFull, FaDroplet  } from "react-icons/fa6";


export default function WeatherPage({ params }) {
  const [weatherData, setWeatherData] = useState(null);

  const { lat, lon } = params;

  const fetchWeatherData = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `/api/getWeather?lat=${latitude}&lon=${longitude}`
      );
      const data = await response.json();
      if (data.status === 200) {
        setWeatherData(data.results);
      } else {
        setWeatherData(null);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchWeatherData(lat, lon);
  }, []);
  
  return (
    <>
      <Logo />
      <SearchBar />
        {weatherData ? (
          <div className="flex items-center justify-center mb-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-[359px] h-[328px] bg-gray-800 p-3 rounded-xl">
                <div className="w-full h-full rounded-lg bg-cover flex flex-col justify-between">
                  <div className="mt-5 ml-5 text-gray-100">
                    <h3 className="text-3xl font-bold">{weatherData.name}</h3>
                    <p className="text-s">{weatherData.date}</p>
                  </div>
                  <div className="ml-5 mt-5 text-gray-100">
                    <p className="text-5xl font-bold mb-2">{weatherData.temp}℃</p>
                    <p className="text-l font-bold">{weatherData.temp_min}℃ / {weatherData.temp_max}℃</p>
                    <p className="text-l font-bold">{weatherData.weather}</p>
                  </div>
                </div>
              </div>
              <div className="w-[359px] h-[328px] bg-gray-800 p-3 rounded-xl flex justify-start items-center">
                <div className="w-full h-full rounded-lg bg-cover flex flex-col">
                  <div className="mx-5 mt-5 text-gray-100 flex flex-col gap-2 flex-grow">
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        <FaTemperatureFull className="text-4xl mr-2" />
                        <p className="font-bold">Feels Like:</p>
                      </div>
                      <p className="font-bold ml-auto">{weatherData.feels_like}℃</p>
                    </div>
                    <hr className="border-gray-600 my-2" />
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        <FaDroplet className="text-4xl mr-2" />
                        <p className="font-bold">Humidity:</p>
                      </div>
                      <p className="font-bold ml-auto">{weatherData.humidity}%</p>
                    </div>
                    <hr className="border-gray-600 my-2" />
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        <FaWind className="text-4xl mr-2" />
                        <p className="font-bold">Wind Speed:</p>
                      </div>
                      <p className="font-bold ml-auto">{weatherData.wind_speed}m/s</p>
                    </div>
                    <hr className="border-gray-600 my-2" />
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        <MdOutlineVisibility className="text-4xl mr-2" />
                        <p className="font-bold">Visibility:</p>
                      </div>
                      <p className="font-bold ml-auto">{weatherData.visibility}km</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        ) : (
          <p className="text-center mt-4 text-white">Loading...</p>
        )}
      {weatherData && (
        <div className="flex items-center justify-center mb-4">
          <div className="w-[359px] md:w-[734px]">
          < ChartDetails results={weatherData} />
          </div>
        </div>
        )
      }
    </>
  );
}
