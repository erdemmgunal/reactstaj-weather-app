import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(request) {
    const urlParams = new URL(request.url);
    const lat = urlParams.searchParams.get('lat');
    const lon = urlParams.searchParams.get('lon');
    const OPEN_WEATHER_APP_ID = process.env.OPEN_WEATHER_APP_ID;

    if (!lat || !lon) {
        return NextResponse.json({ status: 500, message: "Invalid Params" });
    }

    const kelvinToCelsius = kelvin => kelvin - 273.15;

    const formatDate = (date) => {
        const options = { day: 'numeric', month: 'short' };
        const formattedDate = new Date(date).toLocaleDateString('en-US', options);
        return formattedDate;
    };

    const formatDateForecast = (date) => {
        const options = { hour: 'numeric', minute: 'numeric' };
        const formattedDate = new Date(date).toLocaleTimeString('en-US', options);
        return `${formatDate(date)} ${formattedDate}`;
    }

    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}1&lon=${lon}&appid=${OPEN_WEATHER_APP_ID}`);

        const forecastResponse = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_APP_ID}`);

        const forecastResults = forecastResponse.data.list.map((item) => {
            return {
                date: formatDateForecast(item.dt_txt),
                weather: item.weather[0].description,
                temp: Math.floor(kelvinToCelsius(item.main.temp)),
                temp_min: kelvinToCelsius(item.main.temp_min),
                temp_max: kelvinToCelsius(item.main.temp_max),
            }
        })

        const data = response.data;
        const results = {
            weather: data.weather[0].description,
            name:`${data.name}, ${data.sys.country}`,
            temp: Math.floor(kelvinToCelsius(data.main.temp)),
            feels_like: Math.floor(kelvinToCelsius(data.main.feels_like)),
            temp_min: Math.floor(kelvinToCelsius(data.main.temp_min)),
            temp_max: Math.floor(kelvinToCelsius(data.main.temp_max)),
            visibility: data.visibility / 1000,
            date: formatDate(Date.now()),
            sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString(),
            humidity: data.main.humidity,
            wind_speed: data.wind.speed,
            forecasts: forecastResults
        };
        return NextResponse.json({ status: 200, results: results });
    } catch (error) {
        return NextResponse.json({ status: 500, message: `Internal Server Error ${error}` });
    }
}