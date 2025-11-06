import Usuario from "#models/usuario";
import { UsuarioData } from "../interfaces/usuario.js";

export default class UsuariosServices{
    async create(data:UsuarioData){
        return await Usuario.create(data);
    }
    async readUsuarioByCorreo(email:string){
        return Usuario.query().where('email', email).first();
    }
    async readUsuarioByDocumento(documento:string){
        return Usuario.query().where('documento', documento).first();
    }
}