import Categoria from "#models/categoria";

export default class CategoriaService {
  async readAll() {
    const res = Categoria.query();
    return res;
  }
}