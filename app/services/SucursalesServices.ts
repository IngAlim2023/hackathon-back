import Sucursal from '#models/sucursal'
import { SucursalData } from '../interfaces/sucursales.js'

export default class SucursalesServices {
  async create(data: SucursalData) {
    return await Sucursal.create(data)
  }
  async read() {
    return await Sucursal.query().select('*')
  }
}
