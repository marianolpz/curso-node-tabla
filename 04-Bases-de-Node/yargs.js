const colors = require('colors');
const {tablaMultiplicar} = require ('./helpers/multiplicar');
const argv = require ('./config-yargs/yargs-config');



console.clear()

// console.log(argv);

tablaMultiplicar(argv.b,argv.l, argv.h)
.then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'.green))
.catch(err => console.log(err));

























// const argv = require('yargs')
//                     .option('b', {
//                         alias: 'base',
//                         type:'number',
//                         demandOption:true
//                     })
//                     .check ((argv,options)=>{
//                         if ( isNaN (argv.b) ) {
//                             throw 'Base have to be a number'
//                         }
//                         return true;
//                     })
//                     .argv;

   


