import router from "@adonisjs/core/services/router";
import ProductoController from "../../app/controller/ProductoController.js";

const productoController = new ProductoController;

router.post('/api/v1/productos/create', productoController.createProducto);
router.get('/api/v1/productos/read', productoController.readAllProductos);
router.get('/api/v1/productos/read/:id', productoController.readByIdProducto);
