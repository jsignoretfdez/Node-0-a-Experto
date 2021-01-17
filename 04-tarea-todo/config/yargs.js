const completado = {
    completado: {
        alias: 'c',
        default: true,
    }
}

const descripcion = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion tarea por hacer',
    }
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer',{
        descripcion
    })
    .command('actualizar', 'Actualiza la tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrando', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv,
}
