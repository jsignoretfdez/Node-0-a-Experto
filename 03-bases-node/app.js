//const fs = require('fs');

const argv = require('./config/yargs').argv;
const colors = require('colors');

const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch (comando){
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo Creado: ${archivo}`.random))
            .catch(err => console.log(err));
        break;

    default:
        console.log('No existe ningun comando valido');
        break;
}

//let base = 6;

//console.log(process.argv);

//let argv2 = process.argv;

//console.log(argv);


/*let parameter = argv [2];
let base =parameter.split('=')[1];*/


//console.log(parameter);

/*let data = '';

for (let i = 1; i <=10; i++){

    let resultado = base * i;
    data +=`${base} * ${i} = ${resultado}\n`;

}

fs.writeFile(`tablas/tabla-${base}.txt`, data, (err => {

    if (err) throw err;

    console.log('Archivo creado correctamente');

}));*/


