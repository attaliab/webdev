const cityInput = document.getElementById('city')
const form = document.getElementById('cityForm')
const weatherDiv = document.getElementById('weather')

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

        const icon = function(weatherCondition){
          let img = document.createElement("img"); 
          if (weatherCondition === 'Sunny'){
            img = './images/sunny.png'
          } else if (weatherCondition.includes('rain')) {
            img = './images/rainy.png'
          } else if (weatherCondition.includes('cloudy')) {
            img = './images/partly-cloudy.png'
          } else if (weatherCondition.includes('snow') || weatherCondition.includes('Blizzard')) {
            img = './images/snow.png'
          } else if (weatherCondition.includes('Overcast')) {
            img = './images/overcast.png'
          } else if (weatherCondition.includes('Mist')) {
            img = './images/mist.png'
          } else if (weatherCondition.includes('Fog')) {
            img = './images/fog.png'
          }
          return img;
        }

        const forecastDiv = document.getElementById('forecast')
        const iconElement = icon(conditionForecast);
        console.log(iconElement)
        forecastDiv.innerHTML += `<div class="row">
        <div class="col-sm-6">
          <div class="card" id='dayCard'>
          <img src="${iconElement}" class="card-img-top p-2" alt="...">
            <div class="card-body">
              <div class='d-flex justify-content-center justify-content-evenly pt-1'>
                <h5 class="card-title  text-center" id='max'>${maxTempForecast}</h5>
                <h5 class="card-title text-center" id='min' >${minTempForecast}</h5>
              </div>
              <p class="card-text d-flex justify-content-center text-center" id='condition'>${conditionForecast}</p>
            </div>
          </div>
        </div>`
    }
}

// Event listener
form.addEventListener('submit', function(event){
    //this says 'in the EVENT of a form submission, prevent default from happening'
    event.preventDefault()
    let city = cityInput.value
    displayData(city)
})