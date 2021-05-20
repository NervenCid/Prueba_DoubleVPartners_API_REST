//Importamos la app
const app = require('./app');

//Esta funcion ejecuta el servidor
async function main(){

    //Obtenemos el puerto
    const PORT = app.get('port');

    //Creamos el servidor
    await app.listen(PORT, '0.0.0.0');

    //Mostramos por consola
    console.log('Servidor principal ejecutandose en el puerto: ', PORT);
    
};

//Iniciamos el servidor
main();