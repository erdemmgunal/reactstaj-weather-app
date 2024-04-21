import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(request) {
    const urlParams = new URL(request.url);
    const query = urlParams.searchParams.get('q');
    try {
        const response = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${query}&count=3&language=en&format=json`, { next : { revalidate : 900 }});
        const data = response.data;
        const results = data.results.map((item) => {
            return {
                id: item.id,
                name: item.name,
                lat: item.latitude,
                lon: item.longitude,
                country: item.country_code,
            }
        });
        return NextResponse.json({ status: 200, results:results});
    } catch (error) {
        return NextResponse.json({ status: 500, message: 'Internal Server Error' });
    }
}