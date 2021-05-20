//Importamos el enrutador desde express
const {Router} = require('express');

//Ejecutamos la funcion y creamos un objeto 'router'
const router = Router();

//Importamos las funciones dentro del archivo 'books_controller.js'
const {
    getShoppingCarts,
    createShoppingCart,
    deleteShoppingCart
} = require('../controllers/shoppingCart_controller');

//Creamos la ruta principal '/'
router.route('/')
    //Metodo 'get'
    //.get((req, res) => res.send('Ruta a carritos de compra'))
    .get(getShoppingCarts)
    //Metodo 'POST'
    .post(createShoppingCart);

//Creamos la ruta 'id'
router.route('/:id')
    //Metodo 'DELETE'
    .delete(deleteShoppingCart);

//Exportamos el modulo
module.exports = router;
