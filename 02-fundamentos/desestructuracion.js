


const deadpool= {
    nombre: 'Wave',
    apellido: 'Winston',
    poder: 'Regeneracion',
    edad: 50,
    getNombre() {
        return `${ this.nombre } ${ this.apellido } ${this.poder}`
    }
    
}


    



function imprimeHeroe( { nombre, apellido, poder , edad } ) {        
    nombre = 'Fernando'
    console.log(nombre, apellido, poder,edad);
}


const heroes = ['Deadpool', 'Superman', 'Batman'];


const [ , ,h3] = heroes;

console.log(h3);








/*function imprimeHeroe( heroe ) {        
    const { nombre, apellido, poder , edad = 0} = heroe;
    console.log(nombre, apellido, poder,edad);
}
imprimeHeroe( deadpool );
*/




//const { nombre, apellido, poder , edad = 0} = deadpool;
//console.log(nombre, apellido, poder,edad);


// console.log( deadpool.getNombre());     
/*const nombre   = deadpool.nombre;
const apellido = deadpool.apellido;
const poder    = deadpool.poder;
*/




