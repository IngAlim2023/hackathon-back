import { BaseSeeder } from '@adonisjs/lucid/seeders'
import db from '@adonisjs/lucid/services/db'

export default class extends BaseSeeder {
  async run() {
    const rolExist = await db.from('rols').count('* as total')
    if (rolExist[0].total > 0) return

    await db.table('rols').insert([
      {
        id: 1,
        nombre: 'Administrador',
      },
      {
        id: 2,
        nombre: 'empleado',
      },
      {
        id: 3,
        nombre: 'cliente',
      }
    ])
  }
}