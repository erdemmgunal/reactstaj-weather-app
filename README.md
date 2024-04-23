
## Demo
[https://reactstaj-iweather.vercel.app](https://reactstaj-iweather.vercel.app)

# Project Description


WeatherApp is a user-friendly weather application that provides users with accurate and up-to-date weather information. Whether you want to check the local weather or explore weather forecasts for different locations, WeatherApp has you covered. With its intuitive interface and convenient features, staying informed about the weather has never been easier.

## Installation


Install iWeather-App with npm

```bash
  git clone https://github.com/erdemmgunal/reactstaj-weather-app.git
  cd reactstaj-weather-app
```
    
## Key Features


- Geographical Toggle Button: Easily switch between viewing the local weather and exploring weather data for other locations by toggling the geographical feature.
- Search Functionality: Seamlessly search for weather information in specific cities or regions using the search button. Enter the desired location, and WeatherApp will retrieve the relevant weather data for you.
- Detailed Weather Information: Gain insights into various weather parameters including temperature, feels like temperature, humidity, wind speed, and visibility. WeatherApp provides comprehensive data to help you plan your day accordingly.
- Graphical Forecast Chart: Visualize the weather forecast with a graphical chart displaying minimum and maximum temperatures over a specified period. This feature allows users to quickly grasp the temperature trends and plan their activities accordingly.

## Environment Variables


To run this project, you will need to add the following environment variables to your .env file

`OPEN_WEATHER_APP_ID`

## API Reference

#### Autocomplete Search


```http
  GET /api/autocomplete/?query=<city>
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|  `query`  | `string` | **Required**.  City to go  |

#### Get Weather Data


```http
  GET /api/getWeather/?lat=<latitude>&lon=<longitude>
```

|  Parameter  | Type     | Description                       |
|  :--------  | :------- | :-------------------------------- |
|    `lat`    | `string` | **Required**.  latitude for city  |
|    `lon`    | `string` | **Required**. longitude for city  |


## Technologies Used


- React.js
- Tailwind CSS
- Axios
- OpenWeather API

## Future Enhancements

WeatherApp is continuously evolving to meet the needs of its users. Future enhancements may include: (yapmicam buyuk bir ihtimalle readme guzel gozuksun diye)

- User Preferences: Allow users to customize their weather preferences and save favorite locations for quick access.
- Weather Alerts: Implement real-time weather alerts and notifications to keep users informed about severe weather conditions in their area.
- Internationalization: Support multiple languages to cater to users from diverse linguistic backgrounds.
- Theme Toggle: Introduce a theme toggle feature that enables users to switch between dark and light themes based on their preferences. This feature enhances the user experience by providing flexibility and personalization options.
- Search Functionality: Add a search functionality that allows users to search for weather forecasts of specific locations. Users can enter the name of the city or town they want to check the weather for, providing them with more control and convenience.


## Feedback

We value your feedback! If you encounter any issues or have suggestions for improvement, please let us know. You can reach out to us at [erdemmgunal@gmail.com](mailto:erdemmgunal@gmail.com) or create a pull request directly on GitHub. Your contributions help us make iWeather-App even better for everyone!

