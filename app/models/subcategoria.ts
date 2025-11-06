import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import Categoria from './categoria.js'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Producto from './producto.js'

export default class Subcategoria extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column() declare idcategoria:number

  @column() declare nombre:string
  

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(()=>Categoria,{foreignKey:'idcategoria'})
  declare subcategoria:BelongsTo<typeof Categoria>

  @hasMany(()=>Producto)
  declare productos:HasMany<typeof Producto>
}