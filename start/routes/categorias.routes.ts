import router from "@adonisjs/core/services/router";
import CategoriaController from "../../app/controller/CategoriaController.js";

const categoriaController = new CategoriaController;

router.get('/api/v1/categorias/read', categoriaController.readAllCategorias)