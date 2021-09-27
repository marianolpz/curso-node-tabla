const colors = require('colors');
const fs = require('fs');

const tablaMultiplicar = async (base,listar,hasta) =>{
    try {

        
        let salida2= '';
        let consola= '';


        
    
        for (let i = 1; i <= hasta; i++) {
            salida2 += `${base} x ${[i]}= ${ base * [i]}\n`;
            consola += `${base} ${'x'.yellow} ${[i]}${'='.yellow} ${ base * [i]}\n`;
        }
        if(listar){
            console.log("=================".yellow)
            console.log(` TABLA DEL ${base}`.yellow)
            console.log("=================".yellow)
            console.log(consola);
        }
        fs.writeFileSync(`./salida/tabla-del-${base}.txt`, salida2);

            return `tabla-del-${base}.txt`;
        
    
        
    } catch (err) {
        throw err;
    }}

    module.exports = {
        tablaMultiplicar
        
    }