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

    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}1&lon=${lon}&appid=${OPEN_WEATHER_APP_ID}`, { next : { revalidate : 900 }});
        const data = response.data;
        const results = {
            name:`${data.name}, ${data.sys.country}`,
        };
        return NextResponse.json({ status: 200, results: results });
    } catch (error) {
        return NextResponse.json({ status: 500, message: `Internal Server Error ${error}` });
    }
}