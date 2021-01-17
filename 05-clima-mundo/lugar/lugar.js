const axios = require('axios');

const getLugar = async (direccion) => {


    const appiId = '1fdcec22fc5ce2c9b59e90ddfb6ce123';

    const encodeURl = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${encodeURl}&appid=${appiId}`,

    });

    const resp = await instance.get();

    if (resp.data.length === 0){
        throw new Error(`No hay resultados para la ${direccion}`)
    }

    const data = resp.data

    const dir = data.name;
    const lat = data.coord.lat;
    const long = data.coord.lon;

    return{
        dir,
        lat,
        long
    }
}

module.exports = {
    getLugar,
}





