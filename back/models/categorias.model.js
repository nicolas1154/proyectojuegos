const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategoriasSchema = new Schema({
    nombre: {type: String, required: true, max:60}
});

module.exports = mongoose.model("categorias", CategoriasSchema);
