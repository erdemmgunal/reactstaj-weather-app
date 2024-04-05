const search = {"status":200,"results":{"weather":"clear sky","temp":16,"feels_like":15,"temp_min":16,"temp_max":19,"visibility":10,"date":"Apr 1","humidity":64,"wind_speed":0,"forecasts":[{"date":"Apr 1 9:00 PM","weather":"clear sky","temp":16,"temp_min":16.410000000000025,"temp_max":17.120000000000005},{"date":"Apr 2 12:00 AM","weather":"clear sky","temp":16,"temp_min":16.100000000000023,"temp_max":16.310000000000002},{"date":"Apr 2 3:00 AM","weather":"clear sky","temp":15,"temp_min":15.090000000000032,"temp_max":15.53000000000003},{"date":"Apr 2 6:00 AM","weather":"broken clouds","temp":16,"temp_min":16.49000000000001,"temp_max":16.49000000000001},{"date":"Apr 2 9:00 AM","weather":"overcast clouds","temp":20,"temp_min":20.78000000000003,"temp_max":20.78000000000003},{"date":"Apr 2 12:00 PM","weather":"overcast clouds","temp":22,"temp_min":22.470000000000027,"temp_max":22.470000000000027},{"date":"Apr 2 3:00 PM","weather":"broken clouds","temp":23,"temp_min":23.28000000000003,"temp_max":23.28000000000003},{"date":"Apr 2 6:00 PM","weather":"broken clouds","temp":19,"temp_min":19.470000000000027,"temp_max":19.470000000000027},{"date":"Apr 2 9:00 PM","weather":"scattered clouds","temp":17,"temp_min":17.24000000000001,"temp_max":17.24000000000001}]}}

const chartData = search.results.forecasts.map((item) => {
    return {
        date: item.date,
        temp: item.temp,
        temp_min: item.temp_min,
        temp_max: item.temp_max
    }
})

console.log(chartData)