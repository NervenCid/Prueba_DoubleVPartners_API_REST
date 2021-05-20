//Cargamos el controlador de la base de datos
const mongoose = require('mongoose');

//Nos conectamos a la base de datos, en caso de no existir
//se crea automaticamente

//const URI = 'mongodb://localhost/doublevpartners';

//Para que no haya acceso directo por parte de otros desarrolladores 
//a la base de datos usamos la libreria 'dotenv'para encontrar la 
//direccion dentro de las variables de entorno del sistema
//(en este caso un archivo '.env' dentro de este proyecto)
//Con 'process' NodeJS tiene acceso a las variables de entorno
//del sistema.

//Primero verificamos la variable de entorno
//Si se reporta como 'undefined' va a dar error
//Probablemente toque correr el servidor con permisos de administrador
console.log('Verificando variable de entorno: ', process.env.MONGODB_URI);

//Podemos usar un operador ternario para validar si la variable de entorno existe
//y evitar el error del 'undefined'
//Podemos conectarnos a una base de datos diferente pero en este caso
//nos conectamos a la misma base de datos del archivo '.env'
const URI = process.env.MONGODB_URI ? 
    process.env.MONGODB_URI : 'mongodb://localhost/doublevpartners';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false  
});

//Asignamos la conexion a una variable para facilitar su manipulacion
const connection = mongoose.connection;

//Una vez la conexion este abierta mostramos por consola
connection.once('open', ()=>{
    console.log('Base de datos conectada');
});
