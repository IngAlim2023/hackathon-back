import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'empleados'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
    
      table.integer('idusuarios').notNullable().unsigned().references('id').inTable('usuarios')
      table.integer('idsucursal').notNullable().unsigned().references('id').inTable('sucursals')
      
      table.boolean('activo').defaultTo(true)



      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}