
const http = require('http');

http.createServer( ((req, res) => {

    res.writeHead(200, {
        'content-type': 'application/json'
    });

    let salida = {
        nombre: 'Jose',
        edad: 35,
        url: req.url
    }

    res.write(JSON.stringify(salida));
    //res.write('Hola Mundo');
    res.end();

}))
.listen(8080);


console.log('Escuchando el puerto 8080')
