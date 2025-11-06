import router from "@adonisjs/core/services/router";
import VentaController from "../../app/controller/VentaController.js";


const ventaController = new VentaController;

router.post('/api/v1/ventas/create', ventaController.createVenta)
router.get('/api/v1/ventas/read', ventaController.readAllVentas)
router.get('/api/v1/ventas/read/:id', ventaController.readByIdVenta)
