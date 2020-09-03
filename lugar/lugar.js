const axios = require('axios')

const getLugar = async(dir) => {
    const encodedURL = encodeURI(dir)
    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${encodedURL}&appid=48d0cf38e828aae35d67c3c1197937b1`
            //headers: { 'x-rapidapi-key': 'b7443f9a68msh454eaf1a8d41913p17456bjsn6d21b4a0dcb3' }
    })
    const resp = await instance.get();
    const data = resp.data
    const direccion = data.name
    const lat = data.coord.lat
    const lon = data.coord.lon
    return {
        direccion,
        lat,
        lon
    }
}

module.exports = {
    getLugar
}