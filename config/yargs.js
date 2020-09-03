const argv = require('yargs').option({
    direccion: {
        alias: 'd',
        desc: 'Direccion del pais que quieres saber el clima',
        demand: true
    }
}).argv



module.exports = {
    argv
}