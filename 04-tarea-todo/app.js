//const argv = require('yargs').argv
const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer')



let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        break;

    case 'listar':

        let listado = porHacer.getListado();

      for (let tarea of listado) {
            console.log('=====Por Hacer ======'.green);
            console.log(tarea.desc);
            console.log('Estado:', tarea.completado);
            console.log('====================='.green);
        }

        break;

    case 'actualizar':

        let actualizado =porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        porHacer.borrado(argv.descripcion)
        break;

    default:
        console.log('No existe');
        break;
}
