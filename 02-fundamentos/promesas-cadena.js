const empleados = [
    {
      id: 1,
      nombre: "Fernando",
      apellido: "Fernandez"
    },
    {
      id: 2,
      nombre: "Linda",
      apellido: "loepz"
    },
    {
      id: 3,
      nombre: "Karen",
      apellido: "Fernandez"
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
  
  let nombre;
  
  
  getEmpleado(id)
    .then( empleado => {  //si todo sale bien obtengo el empleado.
        nombre= empleado;
        
        return getSalario( id )  // si no coloco return no puedo encadenar otro .then
    }) 
    .then( salario => console.log( `Èl empledo, ${nombre}, tiene un salario de: ${salario}` ))
    .catch( err => console.log( err))