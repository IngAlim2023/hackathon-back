import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import Cliente from './cliente.js'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Empleado from './empleado.js'
import Detalleventa from './detalleventa.js'

export default class Venta extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
  

  @column() declare idcliente:number
  @column() declare idempleado:number

  @column() declare total:number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(()=>Cliente,{foreignKey:'idcliente'})
  declare cliente:BelongsTo<typeof Cliente>

  @belongsTo(()=>Empleado,{foreignKey:'idempleado'})
  declare empleado:BelongsTo<typeof Empleado>

  @hasMany(()=>Detalleventa, {
    foreignKey: 'idventa'
  })
  declare detalleventas:HasMany<typeof Detalleventa>
}