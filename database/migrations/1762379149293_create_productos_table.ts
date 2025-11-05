import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'productos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table
        .integer('idsubcategoria')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('subcategorias')

      table.string('nombre', 200).notNullable()
      table.string('descripcion', 200).notNullable()
      table.decimal('precioventa', 13, 1).notNullable()
      table.decimal('preciocompra', 13, 1).notNullable()
      table.string('talla', 10).notNullable()
      table.integer('stock').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
