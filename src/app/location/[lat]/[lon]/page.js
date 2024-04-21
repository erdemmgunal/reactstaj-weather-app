"use client";
import WeatherData from "@/app/components/WeatherData";
import ChartDetails from "@/app/components/ChartDetails";
import SearchBar from "@/app/components/SearchBar";
import ClipLoader from "react-spinners/ClipLoader";
import Card from "@/app/components/Card";
import { useEffect, useState } from "react";
import Logo from "@/app/components/Logo";
import Head from "next/head";

export default function WeatherPage({ params }) {
  const [weatherData, setWeatherData] = useState(null);

  const { lat, lon } = params;
  
  const initial = new Date()

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
            <Card initial={initial} weatherData={weatherData} />
            <WeatherData weatherData={weatherData}/>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <ClipLoader color="#8FB2F5" />
        </div>
      )}
      {weatherData && (
        <div className="flex items-center justify-center mb-4">
          <div className="w-[359px] md:w-[734px] bg-gray-800">
            <ChartDetails results={weatherData} />
          </div>
        </div>
      )}
    </>
  );
}