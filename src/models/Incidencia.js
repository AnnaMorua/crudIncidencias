const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IncidenciaSchema = new Schema({
   tipo: String,
   prioridad: String,
   grupo: String,
   asunto: String,
   descripcion: String,
   fecha: String

});

module.exports = mongoose.model('incidencias', IncidenciaSchema);