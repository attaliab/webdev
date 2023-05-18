const cityInput = document.getElementById('city')
const form = document.getElementById('cityForm')
const weatherDiv = document.getElementById('weather')

const apiKey = '264123c8e12246e58ad144116231805'

const getData = async function(city){
    let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=264123c8e12246e58ad144116231805&q=${city}&aqi=no`)
    let data = response.json()
    return data
}

const displayData = async function(city){
    let weatherData = await getData(city)
    console.log(weatherData)
    weatherDiv.innerHTML += `<h1>${weatherData.location.name}, ${weatherData.location.region}</h1>`
    weatherDiv.innerHTML += `<p>${weatherData.current.condition.text}</p>`
    weatherDiv.innerHTML += `<p>${weatherData.current.temp_f}°</p>`

}


form.addEventListener('submit', function(event){
    //this says 'in the EVENT of a form submission, prevent default from happening'
    event.preventDefault()
    let city = cityInput.value
    displayData(city)
})





// current: 
    // cloud: 25
    // condition: {text: 'Partly cloudy', icon: '//cdn.weatherapi.com/weather/64x64/day/116.png', code: 1003}
    // feelslike_c: 11
    // feelslike_f: 51.7
    // gust_kph: 14
    // gust_mph: 8.7
    // humidity: 49
    // is_day: 1
    // last_updated: "2023-05-18 11:45"
    // last_updated_epoch: 1684424700
    // precip_in: 0
    // precip_mm: 0
    // pressure_in: 30.26
    // pressure_mb: 1025
    // temp_c: 12.2
    // temp_f: 54
    // uv: 4
    // vis_km: 16
    // vis_miles: 9
    // wind_degree: 180
    // wind_dir: "S"
    // wind_kph: 11.2
    // wind_mph: 6.9
    // [[Prototype]]: 
    // Object

// location: 
    // country: "United States of America"
    // lat: 39.46
    // localtime: "2023-05-18 11:55"
    // localtime_epoch: 1684425349
    // lon: -77.96
    // name: "Martinsburg"
    // region: "West Virginia"
    // tz_id: "America/New_York"