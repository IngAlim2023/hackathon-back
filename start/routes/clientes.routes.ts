import router from "@adonisjs/core/services/router";
import ClienteController from "../../app/controller/ClienteController.js";

const clienteController = new ClienteController;

router.post('/api/v1/clientes/create', clienteController.createCliente)
router.get('/api/v1/clientes/read', clienteController.readAllClientes)
router.get('/api/v1/clientes/read/:idusuario', clienteController.readByIdUsuario)