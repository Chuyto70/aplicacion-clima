const axios = require('axios')


const getClima = async(lon, lat) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=48d0cf38e828aae35d67c3c1197937b1&units=metric`)

    return resp.data.main.temp
}

module.exports = {
    getClima
}