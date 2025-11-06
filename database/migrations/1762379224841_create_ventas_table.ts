import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'ventas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('idcliente').notNullable().unsigned().references('id').inTable('clientes')
      table.integer('idempleado').notNullable().unsigned().references('id').inTable('empleados')

      table.decimal('total',13,1).notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}