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
    const res = await Venta.query()
      .preload('detalleventas', 
        (qd)=> qd.preload('producto', 
          (qf)=> qf.preload('fotos')))
      .preload('cliente', (qp) => qp.preload('usuario'))
      .preload('empleado', (qe) => qe.preload('usuario'))
      return res;
  }

  async readById(id: number) {
    const res = await Venta.query()
      .preload('detalleventas', 
        (qd)=> qd.preload('producto', 
          (qf)=> qf.preload('fotos')))
      .preload('cliente', (qp) => qp.preload('usuario'))
      .preload('empleado', (qe) => qe.preload('usuario'))
      .where('id', id)
      return res;
  }
  
  async readByCategoria(id: number) {
    const ventas = await Venta.query()
      .preload('detalleventas', (qdv) =>
        qdv.preload('producto', (qp) => qp.where('idcategoria', id))
      )
    
    // Mapa para acumular totales
    const resumen = new Map<number, { producto: string; total: number }>()
    
    for (const venta of ventas) {
      for (const detalle of venta.detalleventas) {
        const producto = detalle.producto
        if (!producto) continue // puede venir null si no coincide con la categoría
      
        const key = producto.id
        const item = resumen.get(key) || {
          producto: producto.nombre,
          total: 0,
        }
      
        item.total += detalle.cantidadproducto
        resumen.set(key, item)
      }
    }
  
    // Convertir a array, ordenar y tomar los 3 primeros
    const top3 = Array.from(resumen.values())
      .sort((a, b) => b.total - a.total)
      .slice(0, 3)
  
    return top3
  }
  
  async readByMes(mes: string){
    const res = await Venta.query()
    return res;
  }
  
  async readBySucursal(id: number){
    const res = await Venta.query()
    return res;
  }

}