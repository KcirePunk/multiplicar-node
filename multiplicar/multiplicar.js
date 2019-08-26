const fs = require('fs');
const colors = require('colors');

let contenido = '';

let listarTabla = (base, limite = 10) => {
    console.log('===================='.green);
    console.log(`tabla de ${base}`.green);
    console.log('===================='.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}\n`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        for (let i = 1; i <= limite; i++) {

            contenido += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, contenido, (err) => {

            if (err)
                reject(err);
            else
                resolve(`tabla-${base}al-${limite}`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}