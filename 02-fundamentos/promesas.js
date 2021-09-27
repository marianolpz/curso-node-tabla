const empleados = [
  {
    id: 1,
    nombre: "Fernando",
  },
  {
    id: 2,
    nombre: "Linda",
  },
  {
    id: 3,
    nombre: "Karen",
  },
];

const salarios = [
  {
    id: 1,
    salario: 1400,
  },
  {
    id: 2,
    salario: 1000,
  },
];
const id = 3;

const getEmpleado = ( id ) => {
        
    return new Promise ((resolve,reject) => {

      const empleado = empleados.find( e => e.id === id)?.nombre

      if(empleado){
        resolve(empleado);
      }else{
        reject (`No existe empleado con id ${ id }`)
      }
    });
    
}
const getSalario = ( id ) => {
        
  return new Promise ((resolve,reject) => {

    const salario = salarios.find( s => s.id === id)?.salario

    if(salario){
      resolve(salario);
    }else{
      reject (`No existe salario con id ${ id }`)
    }
  });
 
}


getEmpleado(id)
  .then( empleado => {
    console.log(empleado);
  })
//PROMESAS EN CADENA




/*getEmpleado(id) se puede mejorar
.then (empleado => {
  
    getSalario (id) 
      .then( salario => {
        console.log(`El empleado: ${empleado}, tiene un salario de: ${salario}`);
        
      })
      .catch( err => console.log(err) );
    })
    .catch( err => console.log(err) );
    
*/

/*
getEmpleado( id )
  .then (empleado => console.log(empleado) )
  .catch( err => console.log(err) );

  getSalario( id )
  .then (salario => console.log(salario) )
  .catch( err => console.log(err) );
  */