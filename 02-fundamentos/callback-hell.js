const empleados = [
{

    id: 1,
    nombre: 'Fernando'
},
{
    id: 2,
    nombre: 'Linda'
},
{
    id: 3,
    nombre: 'Karen'
}
];

const salarios = [
    {
    
        id: 1,
        salario: 1400
    },
    {
        id: 2,
        salario: 1000
    }
    
    ];

    const id= 3;

    const getEmpleado = ( id, callback) => {
        
        const empleado = empleados.find( e => e.id === id)?.nombre
       if ( empleado ){
         callback( null , empleado );
       }else {
        callback(`Empleado con id ${ id } no existe`);
       }
            

    }
    const getSalario = ( id, callback) => {
        
        const salario = salarios.find( s => s.id === id)?.salario;
       if ( salario ){
         callback( null , salario);
       }else {
        callback(`No existe Salario con id ${ id }`);
       }
    
    }

    
    getEmpleado(id, (err, empleado) =>{
        if ( err){
            console.log('ERROR!');
            return console.log(err);
        }
        getSalario(id, (err, salario) =>{
       
            if (err) {
                return console.log(err);
            }
    
            console.log('El empleado:', empleado , 'tiene un salario de:', salario );
        });
    
    });




    

   
    

    
    
    
    /* const getSalario = ( id ) => {

        const salario = salarios.find( a => a.id === id)
        return salario;
   
    }
   
    console.log(getSalario( 1 ));
   
   */
  
        /*

        if( empleado ){
            return (null,empleado);
        } else{
            return `Empleado con id ${ id } no existe`;
        }

       

          //FIND me va a regresar el primer elemento que encuentre
    }
    
    getEmpleado ( 3, (empleado) => {
        console.log(empleado);
    })
    */
