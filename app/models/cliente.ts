import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import Usuario from './usuario.js'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Venta from './venta.js'

export default class Cliente extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column() declare idusuario:number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(()=>Usuario,{foreignKey:'idusuario'})
  declare usuario:BelongsTo<typeof Usuario>

  @hasMany(()=>Venta)
  declare ventas:HasMany<typeof Venta>
}