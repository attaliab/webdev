const cityInput = document.getElementById('city')
const form = document.getElementById('cityForm')
const weatherDiv = document.getElementById('weather')

const apiKey = '264123c8e12246e58ad144116231805'

const getData = async function(city){
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=264123c8e12246e58ad144116231805&q=${city}&days=5&aqi=no&alerts=no`)
    let data = response.json()
    return data
}

const displayData = async function(city){
    let weatherData = await getData(city)
    const temperature = document.getElementById('temp')
    const location = document.getElementById('location')
    const condition = document.getElementById('condition')
    const forecast = document.getElementById('forecast')
    console.log(weatherData)
    // current weather data
    let roundedTemp = Math.round(weatherData.current.temp_f)
    temperature.innerText += `${roundedTemp}°`
    location.innerText += `${weatherData.location.name}, ${weatherData.location.region}`
    condition.innerText += `${weatherData.current.condition.text}`
    // forecast HTML loop
    // const 5dayArr = weatherData.forecast.forecastday
    for (let i = 0; i < 5; i++){
        const maxTempForecast = weatherData.forecast.forecastday[i].day.maxtemp_f
        const minTempForecast = weatherData.forecast.forecastday[i].day.mintemp_f
        const conditionForecast = weatherData.forecast.forecastday[i].day.condition.text
        const weatherIcon = weatherData.forecast.forecastday[i].day.condition.icon


        //*********CURRENTLY THE CORRECT INFO IS BEING LOGGED IN THE CONSOLE. NOW THE ISSUE IS THAT THE CARDS ARE NOT POPULATING.**************
        console.log(maxTempForecast, minTempForecast, conditionForecast)


    //     const forecastDiv = document.getElementById('forecast')
    //     forecastDiv.innerHTML += `<div class="card" style="width: 18rem;">
    //     <img class="card-img-top" src=${weatherIcon} alt="Card image cap">
    //     <div class="card-body">
    //       <h5 class="card-title">${maxTempForecast}</h5>
    //       <p class="card-text">${minTempForecast}</p>
    //       <p class="card-text">${conditionForecast}</p>
    //     </div>
    //   </div>`
    }
    
 
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