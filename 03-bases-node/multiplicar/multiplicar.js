const fs = require('fs');
const colors = require('colors');


const listarTabla = (base, limite = 10) => {

    console.log('==============='.red);
    console.log(`La tabla del ${base}`.magenta.underline.bgGreen);
    console.log('==============='.strikethrough);

    for (let i = 1; i <= limite; i++){

        let resultado = base * i;
        console.log(`${base} * ${i} = ${resultado}`);

    }

}

const crearArchivo = (base, limite = 10) => {

    return new Promise( ((resolve, reject) => {

        if (!Number(base)) {
            reject (`El valor introducido ${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <=limite; i++){

            let resultado = base * i;
            data +=`${base} * ${i} = ${resultado}\n`;

        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err => {

            if (err)
                reject(err);
            else
                resolve (`tabla-${base}.txt`);

        }));


    }))
}

module.exports = {
    crearArchivo,
    listarTabla
}

