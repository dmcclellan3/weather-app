import axios from 'axios'

const weatherBtn = document.getElementById("weather-button")
const zipCodeInsert = document.getElementById("zip-code-insert")
const cityField = document.getElementById("city-field")
const kelvinField = document.getElementById("temperature-field-1")
const celsiusField = document.getElementById("temperature-field-2")
const fahrenheitField = document.getElementById("temperature-field-3")
const conditionField = document.getElementById("condition-field")
const infoField = document.getElementById("info-field")
const weatherIcon = document.getElementById("weather-icon")


weatherBtn.addEventListener("click", () => {

    getWeather(zipCodeInsert.value)

    

})


function getWeather (zipCode) {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},US&appid=8d8a35e78ec3babb4db1abb8150ab7e4`)
        .then(response => {
            
            console.log('data: ', response.data)
            let temp = response.data.main.temp
            cityField.textContent = response.data.name
            kelvinField.textContent = `${Math.round(response.data.main.temp)}K`
            fahrenheitField.textContent = `${Math.round((((temp - 273.15) * 1.8) + 32))}F`
            celsiusField.textContent = `${Math.round((temp - 273.15))}C`
            conditionField.textContent = response.data.weather[0].description
            weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`)
            
        })
        .catch(error => {
        console.log('error: ', error)
        alert(`Invalid Zip Code: ${error}`)
        

    })

}






// function fetchSwanson(){
// fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes/1')
// .then(response => response.json())
// .then(data => console.log('data: ', data))
// .catch(error => {
//     console.log('error: ', error)
// })

// }
// fetchSwanson()


// function fetchWeather(){
    // fetch('https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={8d8a35e78ec3babb4db1abb8150ab7e4}')
    // .then(response => response.json())
    // .then(data => console.log('data: ', data))
    // .catch(error => {
    //     console.log('error: ', error)
    // })