import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import Sucursal from './sucursal.js'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Usuario from './usuario.js'
import Venta from './venta.js'

export default class Empleado extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column() declare idusuario: number
  @column() declare idsucursal: number
  
  @column() declare activo: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(()=>Usuario,{foreignKey:'idusuario'})
  declare usuario:BelongsTo<typeof Usuario>

  @belongsTo(()=>Sucursal,{foreignKey:'idsucursal'})
  declare sucursal:BelongsTo<typeof Sucursal>

  @hasMany(()=>Venta)
  declare ventas:HasMany<typeof Venta>
}