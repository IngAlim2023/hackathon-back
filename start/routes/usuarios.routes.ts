import Usuarioscontroller from "../../app/controller/UsuariosController.js";
import router from "@adonisjs/core/services/router";


const usuarios = new Usuarioscontroller();

router.post('/api/v1/usuarios/create', usuarios.createUsuario);