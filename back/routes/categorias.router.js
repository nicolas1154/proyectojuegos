const express = require("express")
const router = express.Router()
const categoriasController = require("../controllers/categorias.controller")


router.post("/", categoriasController.create)
router.get("/", categoriasController.find)
router.get("/:id", categoriasController.findOne)
router.put("/:id", categoriasController.update)
router.delete("/:id", categoriasController.remove)




module.exports = router 
