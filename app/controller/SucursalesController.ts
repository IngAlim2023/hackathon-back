import SucursalesServices from '#services/SucursalesServices'
import type { HttpContext } from '@adonisjs/core/http'

const sucursal = new SucursalesServices()

export default class SucursalesController {
  async createSucursal({ request, response }: HttpContext) {
    try {
      const { nombre, direccion, ciudad } = request.body()

      await sucursal.create({ nombre, direccion, ciudad })

      return response.status(201).json({ message: 'Creado' })
    } catch (e) {
      return response.status(500).json({ message: 'Error interno.' })
    }
  }
  async readSucursales({ response }: HttpContext) {
    try {
      const sucursales = await sucursal.read()

      return response.status(200).json({ message: 'Exito', data: sucursales })
    } catch (e) {
      return response.status(500).json({ message: 'Error interno.' })
    }
  }
}
