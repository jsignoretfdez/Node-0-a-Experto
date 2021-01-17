const axios = require('axios');

const getClima = async (lat, lon) => {

    const appiId = '1fdcec22fc5ce2c9b59e90ddfb6ce123';

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appiId}&units=metric`);


    return resp.data.main.temp;


}


module.exports={
    getClima,
}
