//Importamos el modelo de datos desde 'models/Books.js'
const Book = require('../models/Book');

//Almacenamos en un objeto todas las funciones relacionadas con 'books'
const booksCtrl = {};

//Con la notacion a continuacion relacionamos las funciones con el objeto 'booksCtrl'

//Funcion get
//booksCtrl.getBooks = (req, res) => res.json({message : 'Metodo GET Books'});
booksCtrl.getBooks = async (req, res) => { 
    //Hacemos una consulta en todos los datos de la coleccion 'Note'
    const books = await Book.find({userOwnerName: req.user.id}).sort({ date: "desc" }).lean();
    console.log('aqui toy', books);
    //Devolvemos el resultado de la consulta
    res.json(books); 
};

//Funcion crear
//booksCtrl.createBook = (req, res) => res.json({message : 'Metodo POST Books'});
booksCtrl.createBook = async (req, res) => {
    //Recibimos desde el cliente
    const {userOwnerName, title, publisher, author,  description} = req.body;
    //Creamos una nueva nota con los datos recibidos
    const newBook = new Book({
        userOwnerName: userOwnerName,
        title: title,
        publisher: publisher,
        author: author,
        description: description
    });
    console.log(newBook);
    //Guardamos en la base datos
    await newBook.save();
    //Enviamos una respuesta al cliente
    res.json({ message: 'Book Creado' });    
};

//Funcion para obtener una sola book
/*
booksCtrl.getNote = async (req, res) => {
    //Buscamos por 'id' una nota y la almacenamos en una constante
    const note = await Note.findById(req.params.id);
    console.log(note);
    //res.json({ title: 'GET - Nota individual'});
    res.json(note);
};*/

//Funcion para borrar un book
booksCtrl.deleteBook = (req, res) => res.json({message : 'Metodo DELETE Books'});
/*
booksCtrl.deleteBook = async (req, res) => {
    //Buscamos por  'id' y eliminamos
    await Note.findByIdAndDelete(req.params.id);
    res.json({message: 'Book Eliminado'})
};*/

//Exportamos el modulo
module.exports = booksCtrl;