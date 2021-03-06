const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();


//conexion a mongo
mongoose.connect('mongodb://localhost/incidencias')
.then(db => console.log('Db conectada'))
.catch(err => console.log(err));

//rutas importadas
const rutaIndex = require('./routes/index');

//settings  
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//rutas
app.use('/', rutaIndex);

app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto 3000');
});