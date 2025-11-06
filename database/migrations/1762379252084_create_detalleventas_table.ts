import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'detalleventas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('idventa').notNullable().unsigned().references('id').inTable('ventas')
      table.integer('idproducto').notNullable().unsigned().references('id').inTable('productos')
      
      table.integer('cantidadproducto').notNullable()
      table.decimal('subtotal',13,1).notNullable()
      table.date('fecha').notNullable()


      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}