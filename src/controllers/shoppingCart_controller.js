//Almacenamos en un objeto todas las funciones relacionadas con 'users'
const shoppingCartCtrl = {};

//Importamos el modelos de datos desde 'models/ShoppingCart.js'
const ShoppingCart = require('../models/ShoppingCart');

//Metodo get
//shoppingCartCtrl.getShoppingCarts = (req, res) => res.json({ message: 'GET - Carritos de compra' });
shoppingCartCtrl.getShoppingCarts = async (req, res) => {
    //Obtenemos los usuarios de la base de datos
    const shoppingCart = await ShoppingCart.find();
    res.json(shoppingCart);
};

//Metodo crear
//shoppingCartCtrl.createShoppingCart = (req, res) => res.json({ message: 'POST - Carrito de compra creado' });
shoppingCartCtrl.createShoppingCart = async(req, res) => {
    //Recibimos los datos desde el cliente con 'req.body' y creamos un objeto 'newUser'
    const {username} = req.body;
    const newShoppingCart = new ShoppingCart({username});
    //Guardamos en la base de datos
    await newShoppingCart.save();
    //Mostramos en una respuesta del servidor
    res.json({ message: 'POST - Carrito creado' });
};

//Metodo para borrar un carrito de compra
//shoppingCartCtrl.deleteShoppingCart = (req, res) => res.json({ message: 'DELETE - Carrito eliminado' });

shoppingCartCtrl.deleteShoppingCart = async(req, res) => {
    //Buscamos por 'id' y eliminamos
    await ShoppingCart.findByIdAndDelete(req.params.id);
    console.log(ShoppingCart);
    //Mostramos en la respuesta del servidor
    res.json({ message: 'DELETE - Usuario eliminado' });
};

//Exportamos el modulo
module.exports = shoppingCartCtrl;