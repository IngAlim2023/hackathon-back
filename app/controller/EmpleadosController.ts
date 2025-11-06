import UsuariosServices from '#services/UsuariosServices'
import Empleado from '#models/empleado'
import Usuario from '#models/usuario'
import type { HttpContext } from '@adonisjs/core/http'
import bcrypt from 'bcrypt'
import db from '@adonisjs/lucid/services/db'
import EmpleadosServices from '#services/EmpleadosServices'

const empleados = new EmpleadosServices()
const user = new UsuariosServices()

export default class EmpleadosController {
  async createEmpleado({ request, response }: HttpContext) {
    const trx = await db.transaction()
    try {
      const {
        //Datos usuario:
        nombres,
        apellidos,
        fechanacimiento,
        password,
        email,
        documento,
        genero,
        tipodocumento,
        //Datos empleado:
        idsucursal,
        activo,
      } = request.body()

      const userExist = await user.readUsuarioByCorreo(email)
      const docExist = await user.readUsuarioByDocumento(documento)

      if (userExist || docExist) {
        await trx.rollback()
        return response.status(409).json({ message: 'El usuario ya está registrado' })
      }

      const hash = await bcrypt.hash(password, 10)

      const newUser = await Usuario.create(
        {
          nombres,
          apellidos,
          fechanacimiento,
          password: hash,
          email,
          documento,
          genero,
          tipodocumento,
          idrol: 2,
        },
        { client: trx }
      )

      await Empleado.create({ idusuario: newUser.id, idsucursal, activo }, { client: trx })

      await trx.commit()

      return response.status(201).json({ message: 'Creado' })
    } catch (e) {
      await trx.rollback()
      return response.status(500).json({ message: 'Error interno.' })
    }
  }
  async readEmpleados({ response }: HttpContext) {
    try {
        const empleadosAll = await empleados.read()
        return response.status(201).json({ message: 'Exito', data:empleadosAll })
    } catch (e) {
      return response.status(500).json({ message: 'Error interno.' })
    }
  }
}
