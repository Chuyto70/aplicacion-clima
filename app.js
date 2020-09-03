const argv = require('./config/yargs').argv
const axios = require('axios')
const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')



const getinfo = async(dir) => {

    try {
        const coord = await lugar.getLugar(dir)
        const temp = await clima.getClima(coord.lon, coord.lat)

        return `La temperatura de ${coord.direccion} es de ${temp}`
    } catch (error) {
        return `No se pudo obtener los datos de ${dir}`
    }

}
getinfo(argv.direccion)
    .then(console.log)
    .catch(console.log)

/*lugar.getLugar(argv.direccion).then(console.log)
    .catch(err => {
        console.log('ERROR!!!!!!' + err);
    })


clima.getClima(139, 35).then(console.log)
    .catch(console.log)*/