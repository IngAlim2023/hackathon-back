import Usuarioscontroller from "../../app/controller/UsuariosController.js";
import router from "@adonisjs/core/services/router";


const usuarios = new Usuarioscontroller();

router.post('/api/v1/usuarios/create', usuarios.createUsuario);
router.post('/api/v1/usuarios/login', usuarios.login);
router.get('/api/v1/usuarios/logout', usuarios.logout);
router.get('/api/v1/usuarios/verifySesion', usuarios.verifySesion);