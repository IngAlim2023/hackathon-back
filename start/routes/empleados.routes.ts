import EmpleadosController from "../../app/controller/EmpleadosController.js";
import router from "@adonisjs/core/services/router";

const empleados = new EmpleadosController();

router.post('/api/v1/empleados/create', empleados.createEmpleado);
router.get('/api/v1/empleados/read', empleados.readEmpleados);
router.get('/api/v1/empleados/read/:id', empleados.readEmpleadosByIdUsuario);
router.get('/api/v1/empleados/read/sucursal/:id', empleados.readEmpleadosByIdUsuario);