import ProductoService from "#services/ProductoService";
import { HttpContext } from "@adonisjs/core/http";
import { DataProducto } from "../interfaces/ProductoInterface.js";

export default class ProductoController {

  async createProducto({request, response}: HttpContext){
    const productService = new ProductoService;
    const data = request.body();
    try {
      const res = await productService.create(data as DataProducto);
      return response.status(201).send({message: 'Producto creado correctamente', data:res})
    } catch (error) {
      return response.status(500).send({message: 'Error al crear el producto', error: error.message})
    }
  }

  async readAllProductos({response}: HttpContext){
    const productService = new ProductoService;
    try {
      const res = await productService.readAll()
      return response.status(200).send({message: 'Productos obtenidos exitosamente', data: res})
    } catch (error) {
      return response.status(500).send({message: 'Error al obtener los productos', error: error.message})
    }
  }

  async readByIdProducto({params, response}: HttpContext) {
    const {id} = params;
    const productService = new ProductoService;
    try {
      const res = await productService.readById(id);
      if(!res || res == null) return response.status(404).send({message: 'Producto no encontradp'})
      return response.status(200).send({message: 'Producto obtenido correctamente', data: res})
    } catch (error) {
      return response.status(500).send({messsage: 'Error al obtener el producto', error: error.message});
    }
  }

 }