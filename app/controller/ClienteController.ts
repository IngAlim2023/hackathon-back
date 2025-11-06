import ClienteService from "#services/ClienteService";
import { HttpContext } from "@adonisjs/core/http";
import { UsuarioData } from "../interfaces/usuario.js";

export default class ClienteController {
  async createCliente({request, response}: HttpContext){
    const data = request.body();
    const clienteService = new ClienteService;
    try {
      const res = await clienteService.create(data as UsuarioData);
      if(typeof(res) == 'string') return response.status(400).send({message: res})
      return response.status(201).send({message: 'Usuario registrado correctamente', data: res})
    } catch (error) {
      return response.status(500).send({message: 'Error al registrar el usuario', error: error.message})
    }
  }

  async readAllClientes({response}: HttpContext) {
    const clienteService = new ClienteService;
    try {
      const res = await clienteService.readAll();
      return response.status(200).send({message: 'Clientes obtenidos correctamente', data:res});
    } catch (error) {
      return response.status(500).send({message: 'Error al obtener los clientes', error: error.message});
    }
  }

  async readByIdUsuario({params, response}: HttpContext) {
    const clienteService = new ClienteService;
    const {idusuario} = params;
    try {
      const res = await clienteService.readByIdUsuario(idusuario);
      return response.status(200).send({message: 'Cliente encontrado correctamente', data: res})
    } catch (error) {
      return response.status(500).send({message: ' Error al obtener el cliente', error: error.message});
    }
  }
}