//Importamos el enrutador desde express
const {Router} = require('express');

//Ejecutamos la funcion y creamos un objeto 'router'
const router = Router();

//Importamos las funciones dentro del archivo 'books_controller.js'
const {
    getBooks,
    createBook,
    deleteBook
} = require('../controllers/books_controller');

//Creamos la ruta principal '/'
router.route('/')
    //Metodo 'get'
    //.get((req, res)=>res.send('GET - Ruta a books'))
    .get(getBooks)
    //Metodo 'POST'
    //.post((req, res) => res.send('POST - Ruta a books'));
    .post(createBook);

//Ruta 'id'
router.route('/:id')
    //Metodo 'delete'
    //.delete((req, res) => res.json({ message: 'Book eliminado' }))
    .delete(deleteBook);

//Exportamos el modulo
module.exports = router;
