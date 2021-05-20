//Importamos 'express'
const express = require('express');

//Con el modulo 'dotenv' importamos las variables de entorno
//contenidas dentro del archivo '.env'
//Se recomienda correr este proyecto con permisos de administrador
require('dotenv').config();

//Importamos 'morgan'
const morgan = require('morgan');

//Importamos el modulo 'path' para poder manipular las rutas de sistema
const path = require('path');

//Importamos 'cors'
const cors = require('cors');

//Creamos una aplicacion
const app = express();

//Importamos el modulo de sesiones de 'express'
const session = require('express-session');

//Importamos la configuracion de la base de datos
//Usamos el archivo .env
//VERIFICAR
require('./database');

//------------------------------------CONFIGURACIONES-----------------------------------

//Configuramos la session
app.use(session({
    secret: 'doublevpartners',
    resave: 'true',
    saveUninitialized: true
})); 

//Definimos el puerto
app.set('port', process.env.PORT || 3000);

//Habilitamos 'cors' para poder comunicarnos con el frontend
app.use(cors()); 

//--------------------------------------MIDDLEWARES-------------------------------------

//Configuramos 'morgan' en modo 'dev' para recibir mensajes de estado del servidor
app.use(morgan('dev'));

//Permitimos que el servidor entienda formato json
app.use(express.json());

//Permite recibir los datos de formulario en texto plano
app.use(express.urlencoded({extended: false})); 

//Variables globales
/*
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
    next(); //Continuamos con las siguientes rutas
});*/ //Configuramos para que los mensajes se muestren en todas las ventanas

//----------------------------------------RUTAS-----------------------------------------

//Definimos la ubicacion de las rutas
app.use('/api/shoppingcarts',require(path.join(__dirname, 'routes', 'shoppingCarts')));
app.use('/api/books', require(path.join(__dirname, 'routes', 'books')));

//--------------------------------------------------------------------------------------

//Exportamos el modulo
module.exports = app;