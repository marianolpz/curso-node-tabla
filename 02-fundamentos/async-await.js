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
  const id = 2;

  const getInfoUsuario= async() => {
      try {
        const emp = await getEmpleado(id);
        const sal = await getSalario(id)
       return  console.log(`El empleado ${emp}, tiene un salario de : ${sal}`);
      } catch (err){
        return console.log(err)
      }
  }


  getInfoUsuario();



 