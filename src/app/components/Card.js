"use client";
import sunClear from "../../../public/weather-icons/Sun.png"
import sunCloud from "../../../public/weather-icons/sun clouds.png"
import sunRain from "../../../public/weather-icons/sun rain.png"

import moonClear from "../../../public/weather-icons/Moon.png"
import moonCloud from "../../../public/weather-icons/Moon,stars and cloud.png"
import moonRain from "../../../public/weather-icons/moon and rain.png"

import thunder from "../../../public/weather-icons/Thunder.png"
import snow from "../../../public/weather-icons/rain.png"

import { useState, useEffect } from "react";
import Image from "next/image";
import Clock from "./ui/Clock";

export default function Card({ weatherData, initial }) {
    const [backgroundImage, setBackgroundImage] = useState('bg-day-clear');
    const [icon, setIcon] = useState(sunClear);

    const dateConverter = (timezone, dt, weekdayFormat) => {
        let utc_time = new Date(dt * 1000);
        let local_time = new Date(utc_time.getTime() + timezone * 1000);
      
        const options = { weekday: weekdayFormat };
        const dateFormatter = new Intl.DateTimeFormat("UTC", options);
      
        return dateFormatter.format(local_time);
    };

    useEffect(() => {
        if ((weatherData.dt >= weatherData.sunrise) && (weatherData.sunset >= weatherData.dt)){
            switch (weatherData.weatherMain) {
                case "Clear":
                    setBackgroundImage('bg-day-clear');
                    setIcon(sunClear)
                    break;
                case "Clouds":
                    setBackgroundImage('bg-day-cloud');
                    setIcon(sunCloud)
                    break;
                case "Rain":
                    setBackgroundImage('bg-day-rain');
                    setIcon(sunRain)
                    break;
                case "Thunderstorm":
                    setBackgroundImage('bg-day-storm');
                    setIcon(thunder)
                    break;
                case "Snow":
                    setBackgroundImage('bg-day-rain');
                    setIcon(snow)
                    break
                default:
                    setBackgroundImage('bg-day-clear');
                    setIcon(sunClear)
                    break;
            }
        } else {
            switch (weatherData.weatherMain) {
                case "Clear":
                    setBackgroundImage('bg-night-clear');
                    setIcon(moonClear)
                    break;
                case "Clouds":
                    setBackgroundImage('bg-night-cloud');
                    setIcon(moonCloud)
                    break;
                case "Rain":
                    setBackgroundImage('bg-night-rain');
                    setIcon(moonRain)
                    break;
                case "Thunderstorm":
                    setBackgroundImage('bg-night-storm');
                    setIcon(thunder)
                    break;
                case "Snow":
                    setBackgroundImage('bg-night-rain');
                    setIcon(snow)
                    break;
                default:
                    setBackgroundImage('bg-night-clear');
                    setIcon(moonClear)
                    break;
            }
        }
    }, [weatherData]);

    return (
        <>
            <div className="w-[359px] h-[328px] bg-gray-800 p-3 rounded-xl">
                <div className={`w-full h-full rounded-lg bg-cover flex flex-col justify-between ${backgroundImage}`}>
                    <div className="flex justify-between text-lg font-semibold p-3">
                        <span className="text-white">{dateConverter(weatherData.timezone, weatherData.dt, "long")}</span>
                        <Clock initial={initial} timezone={weatherData.timezone} />
                    </div>
                    <div className="ml-5 text-gray-100">
                        <h3 className="text-3xl font-bold">{weatherData.name}</h3>
                        <p className="text-sm">{weatherData.date}</p>
                    </div>
                    <div className="flex justify-between ml-5 mt-5 text-gray-100">
                        <div className="mt-5">
                            <p className="text-5xl font-bold mb-2">{weatherData.temp}°C</p>
                            <p className="text-lg font-bold">{weatherData.weather}</p>
                            <p className="text-l font-bold">{weatherData.temp_min}°c / {weatherData.temp_max}°c</p>
                        </div>
                        <div className="w-40 h-40 md:p-3 flex justify-center items-center overflow-hidden">
                            <Image 
                                className="w-full h-full object-contain" 
                                src={icon} 
                                width={40} 
                                height={40} 
                                alt="weather icon"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
