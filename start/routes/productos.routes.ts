import router from "@adonisjs/core/services/router";
import ProductoController from "../../app/controller/ProductoController.js";

const productoController = new ProductoController;

router.post('/api/v1/productos', productoController.createProducto);
router.get('/api/v1/productos', productoController.readAllProductos);
router.get('/api/v1/productos/:id', productoController.readByIdProducto);
