import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasOne } from '@adonisjs/lucid/orm'
import Rol from './rol.js'
import type { BelongsTo, HasOne } from '@adonisjs/lucid/types/relations'
import Empleado from './empleado.js'
import Cliente from './cliente.js'

export default class Usuario extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column() declare idrol: number

  @column() declare nombres: string
  @column() declare apellidos: string
  @column() declare documento: string
  @column() declare password: string
  @column() declare email: string
  @column() declare fechanacimiento: Date
  @column() declare genero: string
  @column() declare tipodocumento: string


  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(()=>Rol,{foreignKey:'idrol'})
  declare rol:BelongsTo<typeof Rol>

  @hasOne(()=>Empleado)
  declare empleados:HasOne<typeof Empleado>

  @hasOne(()=>Cliente)
  declare cliente:HasOne<typeof Cliente>
}