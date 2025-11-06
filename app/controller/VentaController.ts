import VentaService from '#services/VentaService'
import { HttpContext } from '@adonisjs/core/http'
import { DataVenta } from '../interfaces/VentaInterface.js'

export default class VentaController {
  
  async createVenta({ request, response }: HttpContext) {
    const ventaService = new VentaService()
    const data = request.body()
    try {
      const venta = await ventaService.create(data as DataVenta)
      return response.status(201).send({
        message: 'Venta registrada correctamente',
        data: venta
      })
    } catch (error) {
      return response.status(500).send({
        message: 'Error al registrar la venta',
        error: error.message
      })
    }
  }

  async readAllVentas({response}: HttpContext) {
    const ventaService = new VentaService;
    try {
      const res = await ventaService.readAll()
      return response.status(200).send({message: 'Ventas obtenidas correctamente', data: res})
    } catch (error) {
      return response.status(500).send({message: 'Error al obtener las ventas', error: error.message})
    }
  }

  async readByIdVenta({params, response}: HttpContext) {
     const ventaService = new VentaService;
    try {
      const {id} = params
      const res = await ventaService.readById(id);
      if(!res || (await res).length == 0) return response.status(404).send({message: 'Venta no encontrada'})
      return response.status(200).send({message: 'Venta obtenida correctamente', data: res})
    } catch (error) {
      return response.status(500).send({message: 'Error al obtener la venta', error: error.message})
    }
  }
}
