
const fs = require('fs');



let listadoPorHacer = [];

const save = () => {


    let data = JSON.stringify(listadoPorHacer);


    fs.writeFile('./dataBase/data.json', data, err => {

         if (err) {
             throw err
         }

    });

}

const cargarDb = () => {
    try {
        listadoPorHacer = require('../dataBase/data.json');
    } catch (err) {
        listadoPorHacer = []
    }
}


const crear = (desc) => {

    cargarDb();

    let porHacer = {
        desc,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    save();

    return porHacer;

}

const getListado = () => {

    cargarDb();
    return listadoPorHacer;

}

const actualizar = (desc, completado = true) => {

    cargarDb();

    let index = listadoPorHacer.findIndex( tarea => {
        return tarea.desc === desc;
    });

    if ( index >= 0 ) {
        listadoPorHacer[index].completado = completado;
        save();
        return true;
    }else {
        return false;
    }
}

const borrado = (desc) => {

    cargarDb()

    let index = listadoPorHacer.findIndex( tarea => {
        return tarea.desc === desc;
    });

    if ( index >= 0 ) {
        listadoPorHacer.pop(desc[index]);
        save();
        return console.log('Borrando...');
    }else {

        return console.log('No existe Fichero para eliminar');
    }


}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrado
}
