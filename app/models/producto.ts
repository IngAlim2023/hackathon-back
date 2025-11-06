import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import Subcategoria from './subcategoria.js'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Foto from './foto.js'
import Descuento from './descuento.js'
import Detalleventa from './detalleventa.js'

export default class Producto extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column() declare idsubcategoria: number

  @column() declare nombre: string
  @column() declare descripcion: string
  @column() declare precioventa: number
  @column() declare preciocompra: number
  @column() declare talla: string
  @column() declare stock: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Subcategoria, { foreignKey: 'idsubcategoria' })
  declare subcategoria: BelongsTo<typeof Subcategoria>

  @hasMany(() => Foto)
  declare fotos: HasMany<typeof Foto>

  @hasMany(() => Descuento)
  declare descuentos: HasMany<typeof Descuento>

  @hasMany(()=>Detalleventa)
    declare detalleventas:HasMany<typeof Detalleventa>
}
