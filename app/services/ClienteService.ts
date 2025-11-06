import Cliente from "#models/cliente";
import db from "@adonisjs/lucid/services/db";
import UsuariosServices from "./UsuariosServices.js";
import Usuario from "#models/usuario";
import bcrypt from 'bcrypt'
import { UsuarioData } from "../interfaces/usuario.js";

export default class ClienteService {
  async create(data: UsuarioData){
    const user = new UsuariosServices;
    const trx = await db.transaction()
    try {
      const userExist = await user.readUsuarioByCorreo(data.email)
      const docExist = await user.readUsuarioByDocumento(data.documento)

      if (userExist || docExist) {
        await trx.rollback()
        return 'El usuario ya está registrado'
      }

      const hash = await bcrypt.hash(data.password??'123456', 10)

      const newUser = await Usuario.create(
        {...data, idrol: 3, password: hash},
        { client: trx }
      )

      await Cliente.create({ idusuario: newUser.id,  }, { client: trx })
      await trx.commit()
      return newUser;
    } catch (e) {
      await trx.rollback()
      throw e
    }
  }

  async readAll(){
    const res = await Cliente.query();
    return res;
  }

  async readByIdUsuario(idusuario: number){
    const res = await Cliente.query().preload('usuario').where('idusuario', idusuario)
    return res;
  }
}