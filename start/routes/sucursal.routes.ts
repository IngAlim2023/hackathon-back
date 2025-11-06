import SucursalesController from "../../app/controller/SucursalesController.js";
import router from "@adonisjs/core/services/router";

const sucursales = new SucursalesController();

router.post('/api/v1/sucursales/create', sucursales.createSucursal);
router.get('/api/v1/sucursales/read', sucursales.readSucursales);