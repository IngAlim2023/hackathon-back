import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Venta from './venta.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Producto from './producto.js'

export default class Detalleventa extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column() declare idventa:number
  @column() declare idproducto:number
  
  @column() declare cantidadproducto:number
  @column() declare subtotal:number
  @column() declare fecha:Date

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(()=>Venta,{foreignKey:'idventa'})
  declare venta:BelongsTo<typeof Venta>

  @belongsTo(()=>Producto,{foreignKey:'idproducto'})
  declare producto:BelongsTo<typeof Producto>
}