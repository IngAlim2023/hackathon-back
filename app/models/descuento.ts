import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Producto from './producto.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Descuento extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column() declare idproducto:number

  @column() declare porcentaje:number
  @column() declare nombre:string
  @column() declare fechainicio:Date
  @column() declare fechafin:Date

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(()=>Producto,{foreignKey:'idproducto'})
  declare productos:HasMany<typeof Producto>
}