import axios from 'axios'


function axiosWeather () {
    axios.get('https://api.openweathermap.org/data/2.5/weather?zip=40504,US&appid=8d8a35e78ec3babb4db1abb8150ab7e4')

    .then(response => console.log('data: ', response.data))
    .catch(error => {
        console.log('error: ', error)
    })

}

axiosWeather()

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