import router from "@adonisjs/core/services/router";
import VentaController from "../../app/controller/VentaController.js";


const ventaController = new VentaController;

router.post('/api/v1/ventas/create', ventaController.createVenta)
router.get('/api/v1/ventas/read', ventaController.readAllVentas)
router.get('/api/v1/ventas/read/:id', ventaController.readByIdVenta)

// Productos más vendidos por categoría, mes y sucursal.
router.get('/api/v1/ventas/read/top/categoria/:id', ventaController.readByCategoria)
router.get('/api/v1/ventas/read/top/mes/:mes', ventaController.readBymes) // recibe el mes ej: 11 o la fecha 2025-11-06
router.get('/api/v1/ventas/read/top/sucursal/:id', ventaController.readBySucursal)
