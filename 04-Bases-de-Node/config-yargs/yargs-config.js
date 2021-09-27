var colors = require('colors');
const argv = require('yargs')
                    .option('b', {
                        alias: 'base',
                        type:'number',
                        demandOption:true,
                        describe: 'Es la base de la tabla de multiplicar'

                    })
                    .option('l',{
                        alias: 'listar',
                        type: 'boolean',
                        default: false,
                        describe: 'Muestra la tabla en consola'
                    })
                    .option('h',{
                        alias: 'hasta',
                        type: 'number',
                        default: 10,
                        demandOption:true,
                        describe: 'Escribe hasta que num multiplicar'
                    })
                    .check ((argv,options)=>{
                        if ( isNaN (argv.b) || isNaN (argv.h) ) {
                            throw '"h" or "b" have to be equal a number'.brightRed
                        }else  if ( argv.l ) {
                            return true;
                        }else if( argv.h){
                            return true;
                        }else{
                            return true;
                        }
                    })
                    .argv;

module.exports = argv;