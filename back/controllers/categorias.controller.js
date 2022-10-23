const Categoria = require ("../models/categorias.model")

let response ={
    msg: "",
    exito: false
}

exports.create = function(req,res){
    let categoria = new Categoria({
        nombre: req.body.nombre
        
    })

    categoria.save(function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al guardar la categoria"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "La categoria se guardó correctamente"
        res.json(response)
    })
}
exports.find = function(req,res){
    Categoria.find(function(err, categorias){
        res.json(categorias)
    })
}

exports.findOne = function(req,res){
    Category.findOne({_id: req.params.id},function(err, categoria){
        res.json(categoria)
    })
}

exports.update = function(req,res){
    let categoria = {
        nombre: req.body.nombre
    }

    Categoria.findByIdAndUpdate(req.params.id, {$set: categoria}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al modificar la categoria"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "La categoria se modifico correctamente"
        res.json(response)
    })
}
exports.remove = function(req,res){
    Categoria.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al eliminar la categoria"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "La categoria fue eliminada correctamente"
        res.json(response)
    })
}
