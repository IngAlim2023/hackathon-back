import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'usuarios'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('idrol').notNullable().unsigned().defaultTo(3).references('id').inTable('rols')

      table.string('nombres', 100).notNullable()
      table.string('apellidos', 100).notNullable()
      table.string('documento', 45).notNullable().unique()
      table.string('password', 200).notNullable()
      table.string('email', 200).notNullable().unique()
      table.date('fechanacimiento').notNullable()
      table.enum('genero', ['F', 'M'])
      table.enum('tipodocumento', ['Cedula de ciudadania', 'Cedula de extrangeria'])

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
