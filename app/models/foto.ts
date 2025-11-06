import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Producto from './producto.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Foto extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column() declare idproducto:number

  @column() declare url:string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(()=>Producto,{foreignKey:'idproducto'})
  declare producto:BelongsTo<typeof Producto>
}