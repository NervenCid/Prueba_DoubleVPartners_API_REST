//Importamos el controlador de la base de datos (MONGODB)
//Donde 'Schema' es lo que se desea guardar de los datos
//y como guardalos
//Y 'model' es la forma en que mongoDB guardara esos datos
const {Schema, model} = require('mongoose');

//Creamos un nuevo 'Schema'
const bookSchema = new Schema({

    //Almacenamos el usuario para que solo vea lo que dicho usuario creo con su cuenta
    userOwnerName: {type: String, required: true},
    //userOwnerId: {type: String, required: true},
    //Datos del 'Book'    
    title: {
        type: String,
        required: true
    },
    publisher: String,    
    author: String,
    description: String
    /*
    date: {
        type: Date,
        default: Date.now
    }*/
} ,{
    timestamps: true
});

//Creamos un modelo con el 'Schema' y lo exportamos
module.exports = model('Book', bookSchema); 