const { argv } = require('./config/yargs');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const colors = require('colors');

// requireds
let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then((result) => console.log(result))
            .catch((err) => console.log(err));
        break;

    default:
        console.log("Comando no reconocido");
}


// let parametro = argv[2];
// let base = parametro.split('=')[1];

// console.log('Limite ', argv.limite);
// console.log(argv2);optoptopt