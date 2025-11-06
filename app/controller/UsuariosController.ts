import UsuariosServices from '#services/UsuariosServices'
import type { HttpContext } from '@adonisjs/core/http'
import bcrypt from 'bcrypt'

const user = new UsuariosServices()

export default class Usuarioscontroller {
  async createUsuario({ request, response }: HttpContext) {
    try {
      const { nombres, apellidos, fechanacimiento, password, email, documento, genero, tipodocumento } =
        request.body()

      const userExist = await user.readUsuarioByCorreo(email)
      const docExist = await user.readUsuarioByDocumento(documento)

      if (userExist) {
        return response.status(409).json({ message: 'El usuario ya esta registrado' })
      }
      if (docExist) {
        return response.status(409).json({ message: 'El usuario ya esta registrado' })
      }

      const hash = await bcrypt.hash(password, 10)

      await user.create({
        nombres,
        apellidos,
        fechanacimiento,
        password: hash,
        email,
        documento,
        genero,
        tipodocumento,
        idrol: 1,
      })

      return response.status(201).json({ message: 'Creado' })
    } catch (e) {
      return response.status(500).json({ message: 'Error interno.' })
    }
  }
}
