const cityInput = document.getElementById('city')
const form = document.getElementById('cityForm')
const weatherDiv = document.getElementById('weather')

const apiKey = '264123c8e12246e58ad144116231805'

// Data
const getData = async function(city){
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=264123c8e12246e58ad144116231805&q=${city}&days=5&aqi=no&alerts=no`)
    let data = response.json()
    return data
}

// What is displayed
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
    for (let i = 0; i < 5; i++){
        const maxTempForecast = Math.round(weatherData.forecast.forecastday[i].day.maxtemp_f)
        const minTempForecast = Math.round(weatherData.forecast.forecastday[i].day.mintemp_f)
        const conditionForecast = weatherData.forecast.forecastday[i].day.condition.text
        const weatherIcon = icon(iconCondition)
        // weatherData.forecast.forecastday[i].day.condition.icon

        const icon = iconCondition => (
          if (iconCondition === 'sunny'){

          } else if (iconCondition.includes('rain') == true) {

          } else if (iconCondition.includes('snow') == true) {
            
          }
        )

        const forecastDiv = document.getElementById('forecast')
        forecastDiv.innerHTML += `<div class="row">
        <div class="col-sm-6">
          <div class="card" id='dayCard'>
          <img src="${weatherIcon}" class="card-img-top p-2" alt="...">
            <div class="card-body">
              <div class='d-flex justify-content-center justify-content-evenly pt-1'>
                <h5 class="card-title  text-center" id='max'>${maxTempForecast}</h5>
                <h5 class="card-title text-center" id='min' >${minTempForecast}</h5>
              </div>
              <p class="card-text d-flex justify-content-center text-center" id='condition'>${conditionForecast}</p>
              
            </div>
          </div>
        </div>
        `
    }
}

// Event listener
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