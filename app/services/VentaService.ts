import Detalleventa from "#models/detalleventa"
import Venta from "#models/venta"
import db from "@adonisjs/lucid/services/db"
import { DataVenta } from "../interfaces/VentaInterface.js"

export default class VentaService {

  async create(data : DataVenta) {
    const trx = await db.transaction()
    try {
      // Crear la venta
      const venta = await Venta.create({
        idcliente: data.idcliente,
        idempleado: data.idempleado,
        total: data.total
      }, { client: trx })

      // Crear los detalles de la venta
      for (const detalle of data.detalles) {
        await Detalleventa.create({
          idventa: venta.id,
          idproducto: detalle.idproducto,
          cantidadproducto: detalle.cantidadproducto,
          subtotal: detalle.subtotal,
          fecha: new Date()
        }, { client: trx })

        // actualizar stock del producto
        await db.from('productos')
          .where('id', detalle.idproducto)
          .decrement('stock', detalle.cantidadproducto)
          .useTransaction(trx)
      }

      await trx.commit()
      return venta
    } catch (error) {
      await trx.rollback()
      throw error
    }
  }

  async readAll(){
    const res = Venta.query()
      .preload('detalleventas', 
        (qd)=> qd.preload('producto', 
          (qf)=> qf.preload('fotos')))
      .preload('cliente', (qp) => qp.preload('usuario'))
      .preload('empleado', (qe) => qe.preload('usuario'))
      return res;
  }

  async readById(id: number) {
    const res = Venta.query()
      .preload('detalleventas', 
        (qd)=> qd.preload('producto', 
          (qf)=> qf.preload('fotos')))
      .preload('cliente', (qp) => qp.preload('usuario'))
      .preload('empleado', (qe) => qe.preload('usuario'))
      .where('id', id)
      return res;
  }

}