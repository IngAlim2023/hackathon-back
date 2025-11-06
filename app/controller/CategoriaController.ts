import CategoriaService from "#services/CategotiaService";
import { HttpContext } from "@adonisjs/core/http";

export default class CategoriaController {
  async readAllCategorias({response}: HttpContext) {
    const categoariaService = new CategoriaService
    try {
      const categorias = await categoariaService.readAll()
      return response.status(200).send({message: 'Categorias obtenidas correctamente', data: categorias})
    } catch (error) {
      return response.status(500).send({message: 'Error al obtener las categorias', error: error.message})
    }
  }
}
