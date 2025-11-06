import Empleado from '#models/empleado'
import { EmpleadoData } from '../interfaces/empleados.js'

export default class EmpleadosServices {
  async create(data: EmpleadoData) {
    return await Empleado.create(data)
  }
  async read() {
    return await Empleado.query().select('*').preload('usuario')
  }
  async readByIdUsuario(idUsuario:number){
    return await Empleado.query().select('*').where('idusuario', idUsuario).preload('usuario').first()
  }
  async readByIdSucursal(idSucursal:number){
    return await Empleado.query().select('*').where('idsucursal', idSucursal).preload('usuario')
  }
}
