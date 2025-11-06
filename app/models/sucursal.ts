import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Empleado from './empleado.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Sucursal extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column() declare nombre:string
  @column() declare direccion:string
  @column() declare ciudad:string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(()=>Empleado)
  declare empleados:HasMany<typeof Empleado>
}