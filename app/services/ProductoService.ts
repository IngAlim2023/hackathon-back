import Producto from '#models/producto'
import db from '@adonisjs/lucid/services/db'
import { DataProducto } from '../interfaces/ProductoInterface.js'
import Foto from '#models/foto'

export default class ProductoService {

  async create(data: DataProducto) {
    const trx = await db.transaction()
    try {
      const producto = await Producto.create(data, { client: trx })
      if (data.fotos && data.fotos.length > 0) {
        await Promise.all(
          data.fotos.map((f) =>
            Foto.create(
              {
                url: f.url,
                idproducto: producto.id,
              },
              { client: trx }
            )
          )
        )
      }

      await trx.commit()
      return producto
    } catch (error) {
      await trx.rollback()
      throw error
    }
  }

  async readAll() {
    const res = await Producto.query().preload('fotos');
    return res
  }

  async readById(id: number) {
    const res = await Producto.query().preload('fotos').where('id', id);
    return res
  }
}
