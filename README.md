
## Demo
[https://reactstaj-iweather.vercel.app](https://reactstaj-iweather.vercel.app)

# Project Title

A brief description of what this project does and who it's for


## Installation

Install iWeather-App with npm

```bash
  git clone https://github.com/erdemmgunal/reactstaj-weather-app.git
  cd reactstaj-weather-app
```
    
## Features

- Check local weather data with geographical location toggle
- Live previews
- Fullscreen mode
- Responsive Design
- Graphic chart to view min/max weather forecasts 
- Cross platform


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

## Feedback

## Feedback

We value your feedback! If you encounter any issues or have suggestions for improvement, please let us know. You can reach out to us at [erdemmgunal@gmail.com](mailto:erdemmgunal@gmail.com) or create a pull request directly on GitHub. Your contributions help us make iWeather-App even better for everyone!

