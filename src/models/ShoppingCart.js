//Importamos el controlador de la base de datos (MONGODB)
//Donde 'Schema' es lo que se desea guardar de los datos
//y como guardalos
//Y 'model' es la forma en que mongoDB guardara esos datos
const { Schema, model } = require('mongoose');

//Creamos un nuevo 'Schema'
const shoppingCartSchema = new Schema({
    //Hacemos que sea obligatorio el tipo 'String'
    username: {
        type: String,
        required: true,
        //Limpiamos los espacios sobrantes
        trim: true,
        //Evitamos que hayan varios usuarios con el mismo 'username'
        unique: true
    }
}, {
    //Guardamos la fecha cuando se cree el producto
        timestamps: true
    });

//Creamos un modelo con el 'Schema' y lo exportamos
module.exports = model('ShoppingCart', shoppingCartSchema); 