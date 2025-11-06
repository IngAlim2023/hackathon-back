import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import Usuario from './usuario.js'
import type { HasOne } from '@adonisjs/lucid/types/relations'

export default class Rol extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column() declare nombre: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasOne(()=>Usuario)
  declare usuario:HasOne<typeof Usuario>
}