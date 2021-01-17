
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('./config/yargs').argv

/*lugar.getLugar(argv.direccion)
    .then(consoe.log);*/

/*clima.getClima(38.7167, -9.1333)
    .then(console.log)
    .catch((err) => {
        throw err;
    })*/


const getInfo = async (dir) => {

    try {
        let resp = await lugar.getLugar(argv.direccion)
        let temp = await clima.getClima(resp.lat, resp.long)
        let mensaje = `EL clima de ${argv.direccion} es de ${temp}Cº`
        return mensaje
    } catch (err){
        let mensaje = `EL clima de ${argv.direccion} no se puede determinar`;
        return mensaje;

    }

}

getInfo(argv.direccion)
.then(console.log)
    .catch(console.log);
